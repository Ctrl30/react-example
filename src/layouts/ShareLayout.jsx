import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import AsyncComponent from "../utils/AsyncComponent";

import style from './style.scss';

const Demo1 = AsyncComponent(() => import("../pages/share/demo1"));
export default class ShareLayout extends Component {
  render() {
    return (
        <div className={style.right}>
          <Switch>
            <Route path="/share/demo1" component={Demo1} />
          </Switch>
        </div>
    );
  }
}
