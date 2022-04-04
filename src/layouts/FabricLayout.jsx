import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AsyncComponent from "../utils/AsyncComponent";
import style from './style.scss';

const InputDemo = AsyncComponent(() => import("../pages/fabric/rect"));
// const Demo2 = AsyncComponent(() => import("../pages/fabric/demo2"));
export default class FabricLayout extends Component {
  render() {
    return (
      <Fragment>
          <div className={style.formLink}>
              <Link to="/fabric/rect" className={style.link}>rect</Link>
              {/* <Link to="/fabric/demo2" className={style.link}>demo2</Link> */}
          </div>
        <Switch>
          <Route path="/fabric/rect" component={InputDemo} />
          {/* <Route path="/form/demo2" component={Demo2} /> */}
        </Switch>
      </Fragment>
    );
  }
}
