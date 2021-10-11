import React, { Component, Fragment } from "react";
import style from "./demo1.scss";

export default class demo1 extends Component {
  state = {
    rotate: false,
  };
  componentDidMount() {
    // window.onresize = this.detectOrient;
    // this.detectOrient();
  }
  detectOrient = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    if (width >= height) {
      // 横屏
      this.setState({
        rotate: true,
      });
      console.log("aaaaa");
    } else {
      // 竖屏
      this.setState({
        rotate: false,
      });
      console.log("bbbbb");
    }
  };
  render() {
    const { rotate } = this.state;
    return (
      <div className={style.wrap}>
        {rotate ? (
          <Fragment>
            {/* <h1 className={style.center}>横屏</h1> */}
            <div>为了更好的体验，请竖屏查看。。。。</div>
          </Fragment>
        ) : (
          <Fragment>
            {/* <h1 className={style.center}>竖屏</h1> */}
            <div className={style.itemBox}>
            <div className={style.green}>1</div>
            <div className={style.green}>2</div>
            <div className={style.green}>3</div>
            <div className={style.green}>4</div>
            <div className={style.green}>5</div>
            <div className={style.green}>6</div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
