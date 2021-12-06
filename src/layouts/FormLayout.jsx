import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AsyncComponent from "../utils/AsyncComponent";
import style from './style.scss';

const InputDemo = AsyncComponent(() => import("../pages/forms/input-demo"));
const Demo2 = AsyncComponent(() => import("../pages/forms/demo2"));
export default class FormLayout extends Component {
  render() {
    return (
      <Fragment>
          <div className={style.formLink}>
              <Link to="/form/input-demo" className={style.link}>InputDemo</Link>
              <Link to="/form/demo2" className={style.link}>demo2</Link>
          </div>
        <Switch>
          <Route path="/form/input-demo" component={InputDemo} />
          <Route path="/form/demo2" component={Demo2} />
        </Switch>
      </Fragment>
    );
  }
}
