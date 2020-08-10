import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";
import './pagenotfound.css';
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div className="main-box-404">
      <div className="page-404">
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link to="/dashboard">Go back home</Link>
      </div>
      </div>
    );
  }
}

export default Page404;
