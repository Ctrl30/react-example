import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import MainLayout from "../layouts/MainLayout";
import ShareLayout from "../layouts/ShareLayout";
import FormLayout from "../layouts/FormLayout";

class Router extends Component {
  componentDidMount() {
    document.addEventListener("touchstart", function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    });
    document.addEventListener("gesturestart", function (event) {
      event.preventDefault();
    });
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/share" component={ShareLayout} />
          <Route path="/form" component={FormLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
