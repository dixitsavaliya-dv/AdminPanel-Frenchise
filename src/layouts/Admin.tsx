/* eslint-disable */
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";

// import nav from "../routes";
import routes from "../routes";
import headerRoutes from "../headerroute";

import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import { Badge, Nav, NavItem, NavLink as RsNavLink } from "reactstrap";
import EventEmitter from '../event';
import classNames from "classnames";
import "./admin.css";

// const switchRoutes = (
//   <Switch>
//     {routes.map((prop, key) => {
//       if (prop.layout === "/admin") {
//         return (
//           <Route
//             path={prop.layout + prop.path}
//             component={prop.component}
//             key={key}
//           />
//         );
//       }
//     })}
//   </Switch>
// );

// const switchHeaderRoutes = (
//   <Switch>
//     {headerRoutes.map((prop, key) => {
//       if (prop.layout === "/admin") {
//         return (
//           <Route
//             path={prop.layout + prop.path}
//             component={prop.component}
//             key={key}
//           />
//         );
//       }
//     })}
//   </Switch>
// );

interface Props {
  classes: any;
  location: any;
}

interface State {
  image: string;
  color: string;
  hasImage: boolean;
  fixedClasses: string;
  mobileOpen: boolean;
}

class Admin extends React.Component {
  refs: any;
  state = {
    image: image,
    color: "blue",
    hasImage: true,
    fixedClasses: "dropdown show",
    mobileOpen: false,
    isOpen: false,
    isUpdate:false,
    file:''
  };
  constructor(props: any) {
    super(props);
    this.open = this.open.bind(this);
    this.logout = this.logout.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
    this.dropdonSubmenu = this.dropdonSubmenu.bind(this);
    this.showMenu = this.showMenu.bind(this);


    EventEmitter.subscribe('imageUpload', (data:any) => {
      this.setState({
          isUpdate:true
      })
      if(this.state.isUpdate === true) {
        this.setState({
          file: this.state.file = data
      })
      }
  });
    // this.closeNav = this.closeNav.bind(this);
  }

  activeRoute(routeName: any, props: any) {
    const route = window.location.pathname;
    return route === routeName
      ? `nav-item nav-dropdown open`
      : `nav-item nav-dropdown`;
  }

  open() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  showMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClick(e: any) {
    e.preventDefault();
    e.target.parentElement.classList.toggle("open");
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('user-profile');
    window.location.href="/#/login";
  }

  public dropdonSubmenu = (id: any) => {
    const element = document.getElementById(id);
    if (element != null) {
      if (element.classList.value.includes("subList--hidden")) {
        element.classList.remove("subList--hidden");
        element.classList.add("subList");
      } else {
        element.classList.remove("subList");
        element.classList.add("subList--hidden");
      }
    }
  };

  render() {
    const badge = (badge: any) => {
      if (badge) {
        const classes = classNames(badge.class);
        return (
          <Badge className={classes} color={badge.variant}>
            {badge.text}
          </Badge>
        );
      }
    };

    // simple wrapper for nav-title item
    const wrapper = (item: any) => {
      return item.wrapper && item.wrapper.element
        ? React.createElement(
            item.wrapper.element,
            item.wrapper.attributes,
            item.name
          )
        : item.name;
    };

    // nav list section title
    const title = (title: any, key: any) => {
      const classes = classNames("nav-title", title.class);
      return (
        <li key={key} className={classes}>
          {wrapper(title)}{" "}
        </li>
      );
    };

    // nav list divider
    const divider = (divider: any, key: any) => {
      const classes = classNames("divider", divider.class);
      return <li key={key} className={classes} />;
    };

    // nav item with nav link
    const navItem = (item: any, key: any) => {
      const classes = {
        item: classNames(item.class),
        link: classNames(
          "nav-link",
          item.variant ? `nav-link-${item.variant}` : ""
        ),
        icon: classNames(item.icon),
      };
      return navLink(item, key, classes);
    };

    // nav link
    const navLink = (item: any, key: any, classes: any) => {

      const url = item.url ? item.url : "";
      return (
        <NavItem key={key} className={classes.item}>
          {isExternal(url) ? (
            <RsNavLink href={url} className={classes.link} active>
              <i className={classes.icon} />
              {item.name}
              {badge(item.badge)}
            </RsNavLink>
          ) : (
            // to={url}
            <RsNavLink
              className={classes.link}
              activeclassname="active"
              onClick={() => (window.location.href = `/#${url}`)}
            >
              <i className={classes.icon} />
              {item.name}
              {badge(item.badge)}
            </RsNavLink>
          )}
        </NavItem>
      );
    };

    // nav dropdown
    const navDropdown = (item: any, key: any) => {
      return (
        <li
          key={key}
          className={this.activeRoute(item.children[0].url, this.props)}
        >
          <div
            className="navList__subheading row row--align-v-center"
            onClick={() =>
              this.dropdonSubmenu(`sub_${item.children[0].url.split("/")[1]}`)
            }
          >
            <span className="navList__subheading-icon">
              <i className={item.icon} />
            </span>

            <span className="navList__subheading-title">{item.name}</span>
          </div>
          <ul
            className="subList subList--hidden"
            id={`sub_${item.children[0].url.split("/")[1]}`}
          >
            {navChildList(item.children)}
          </ul>
        </li>
      );
    };

    // nav type
    const navType = (item: any, idx: any) =>
      item.title
        ? title(item, idx)
        : item.divider
        ? divider(item, idx)
        : item.children
        ? navDropdown(item, idx)
        : navItem(item, idx);

    // nav list
    const navList = (items: any) => {
      if (items !== undefined) {
        var itemsArray = items.items;

        if (itemsArray) {
          return itemsArray.map((item: any, index: any) =>
            navType(item, index)
          );
        }
      }
    };

    const navChildList = (chilItem: any) => {
      if (chilItem !== undefined) {
        var itemsArray = chilItem;
        if (itemsArray) {
          return itemsArray.map((chilItem: any, index: any) =>
            navType(chilItem, index)
          );
        }
      }
    };

    const isExternal = (url: any) => {
      const link = url ? url.substring(0, 4) : "";
      return link === "http";
    };


    return (
      <div
        className={
          this.state.mobileOpen === false ? "grid" : "grid grid--noscroll"
        }
      >
        <header className="header">
          <i className="fas fa-bars header__menu" onClick={this.open} />
          <div className="header__search">
            <input className="header__input" placeholder="Search..." />
          </div>
          <div className="header__avatar" onClick={this.showMenu}>
            {
              this.state.isUpdate === true ? (
                <img className="header__avatar" src={this.state.file} alt="user image" />
              ) : (
                <img className="header__avatar" src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/headshot.png'} alt="user image" />
              )
            }
            {
              this.state.isOpen === false ? (
                <div className="dropdown">
                {/* <ul className="dropdown__list">
                  <li className="dropdown__list-item">
                    <span className="dropdown__icon">
                      <i className="far fa-user" />
                    </span>
                    <Link to="/user">
                      <span className="dropdown__title">My Profile</span>
                    </Link>
                  </li>
                  <li className="dropdown__list-item">
                    <span className="dropdown__icon">
                      <i className="fas fa-clipboard-list" />
                    </span>
                    <Link to="/change-password">
                      <span className="dropdown__title">Change Password</span>
                    </Link>
                  </li>
                  <li className="dropdown__list-item">
                    <span className="dropdown__icon">
                      <i className="fas fa-sign-out-alt" />
                    </span>

                    <span className="dropdown__title" onClick={this.logout}>
                      Logout
                    </span>
                  </li>
                </ul> */}
            </div>
              ) : (

            <div className="dropdown dropdown--active">
                <ul className="dropdown__list">
                  <li className="dropdown__list-item">
                    <span className="dropdown__icon">
                      <i className="far fa-user" />
                    </span>
                    <Link to="/user">
                      <span className="dropdown__title">My Profile</span>
                    </Link>
                  </li>
                  <li className="dropdown__list-item">
                    <span className="dropdown__icon">
                      <i className="fas fa-clipboard-list" />
                    </span>
                    <Link to="/change-password">
                      <span className="dropdown__title">Change Password</span>
                    </Link>
                  </li>
                  <li className="dropdown__list-item">
                    <span className="dropdown__icon">
                      <i className="fas fa-sign-out-alt" />
                    </span>

                    <span className="dropdown__title" onClick={this.logout}>
                      Logout
                    </span>
                  </li>
                </ul>
          
            </div>
              )
            }
          </div>
        </header>

        <aside
          className={
            this.state.mobileOpen === false
              ? "sidenav"
              : "sidenav sidenav--active"
          }
        >
          <div className="sidenav__brand">
            <i className="fa fa-shopping-basket sidenav__brand-icon" />
            <Link className="sidenav__brand-link" to="/dashboard">
             Admin
            </Link>
            <i
              className="fas fa-times sidenav__brand-close"
              onClick={this.open}
            />
          </div>
          <div className="row row--align-v-center row--align-h-center">
            <ul className="navList">{navList(routes)}</ul>
          </div>
        </aside>
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default Admin;
