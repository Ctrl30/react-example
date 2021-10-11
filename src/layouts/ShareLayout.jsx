import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AsyncComponent from "../utils/AsyncComponent";

import style from "./style.scss";

const Demo1 = AsyncComponent(() => import("../pages/share/demo1"));
const Demo2 = AsyncComponent(() => import("../pages/share/demo2"));
export default class ShareLayout extends Component {
  render() {
    return (
      <Switch>
        <Route path="/share/demo1" component={Demo1} />
        <Route path="/share/demo2" component={Demo2} />
      </Switch>
    );
  }
}
