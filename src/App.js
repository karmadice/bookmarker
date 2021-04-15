import React, { Component, Fragment } from "react";
import Navbar from "./blocks/navbar";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/home";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <main>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </main>
        </Router>
      </>
    );
  }
}

export default App;
