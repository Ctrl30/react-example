import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AsyncComponent from "../utils/AsyncComponent";


const Demo1 = AsyncComponent(() => import("../pages/share/demo1"));
const Demo2 = AsyncComponent(() => import("../pages/share/demo2"));
const Demo3 = AsyncComponent(() => import("../pages/share/demo3"));
const Demo4 = AsyncComponent(() => import("../pages/share/demo4"));
const Demo5 = AsyncComponent(() => import("../pages/share/demo5"));
const Demo6 = AsyncComponent(() => import("../pages/share/demo6"));
export default class ShareLayout extends Component {
  render() {
    return (
      <Switch>
        <Route path="/share/demo1" component={Demo1} />
        <Route path="/share/demo2" component={Demo2} />
        <Route path="/share/demo3" component={Demo3} />
        <Route path="/share/demo4" component={Demo4} />
        <Route path="/share/demo5" component={Demo5} />
        <Route path="/share/demo6" component={Demo6} />
      </Switch>
    );
  }
}
