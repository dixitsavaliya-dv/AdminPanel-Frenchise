import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// core components
import Admin from "./layouts/Admin";

import "assets/css/material-dashboard-react.css?v=1.6.0";
import Login from "./views/Login/login";
import Main from "./main";

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      // console.log(Component)
      localStorage.getItem("token") !== null ? (
        // console.log("msg")
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/login"
        render={(props: any) =>
          localStorage.getItem("token") !== null ? (
            <Redirect to="/" />
          ) : (
            <Login {...props} />
          )
        }
      />
      <PrivateRoute path="/" component={Main} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
