import React, { Component, Fragment } from "react";
import style from "./demo4.scss";
// import "../../global.scss";

export default class Demo2 extends Component {

    handleChange = ()=>{
        console.log('aaaa',document.documentElement.clientHeight)
    }
    handleBlur = ()=>{
        console.log('bbb',document.documentElement.clientHeight)
    }
  render() {
    return (
      <Fragment>
        <div className={style.main}>
          <div className={style.content}>
            <p>fixed1</p>
            <p>fixed2</p>
            <p>fixed3</p>
            <p>fixed4</p>
            <p>fixed5</p>
            <p>fixed6</p>
            <p>fixed7</p>
            <p>fixed8</p>
            <p>fixed9</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
            <p>fixed</p>
          </div>
        </div>
        <div className={style.footer}>
          <input className={style.text} onChange={this.handleChange} onBlur={this.handleBlur} type="text" />
          <button className={style.submit}>提交</button>
        </div>
      </Fragment>
    );
  }
}
