import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Home from "../Component/home";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">React Example</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/">
              Support
            </Link>
            <Link className="p-2 text-dark" to="/">
              Pricing
            </Link>
          </nav>
          <Link className="btn btn-outline-primary mr-2" to="#">
            Login
          </Link>
          <Link className="btn btn-outline-primary" to="#">
            Sign up
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
