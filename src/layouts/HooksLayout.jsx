import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AsyncComponent from "../utils/AsyncComponent";
import style from './style.scss';

const StateDemo = AsyncComponent(() => import("../pages/hooks/state-demo"));
export default class HooksLayout extends Component {
  render() {
    return (
      <Fragment>
          <div className={style.formLink}>
              <Link to="/hooks/state" className={style.link}>state</Link>
          </div>
        <Switch>
          <Route path="/hooks/state" component={StateDemo} />
        </Switch>
      </Fragment>
    );
  }
}
