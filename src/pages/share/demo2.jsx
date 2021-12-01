import React, { Component } from "react";
import style from "./demo2.scss";

export default class Demo2 extends Component {
  componentDidMount() {
    if (typeof window.visualViewport !== "undefined") {
      window.visualViewport.addEventListener(
        "resize",
        this.onVisualViewportChange
      );
      window.visualViewport.addEventListener(
        "scroll",
        this.onVisualViewportChange
      );
    }
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    if (typeof window.visualViewport !== "undefined") {
      window.visualViewport.removeEventListener(
        "resize",
        this.onVisualViewportChange
      );
      window.visualViewport.removeEventListener(
        "scroll",
        this.onVisualViewportChange
      );
    }
    window.removeEventListener("resize", this.onResize);
  }

  onVisualViewportChange = (e) => {
    this.setState({
      visualViewport: e.target || window.visualViewport,
    });
  };

  onResize = () => {
    this.setState({
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
    });
  };
  state = {
    visualViewport: null,
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight,
  };
  getStyles() {
    const { visualViewport, windowInnerWidth, windowInnerHeight } = this.state;

    // 开启 3D Transform，让 fixed 的子元素相对于容器定位
    // 同时自身也设置为 fixed，以便在非放大情况下不需要频繁移动位置
    const styles = {
      position: "fixed",
      transform: "translateZ(0)",
      ...(this.props.style || {}),
    };

    // 支持 VisualViewport API 情况下直接计算
    if (visualViewport != null) {
      // 需要针对 iOS 越界弹性滚动的情况进行边界检查
      styles.left =
        Math.max(
          0,
          Math.min(
            document.documentElement.scrollWidth - visualViewport.width,
            visualViewport.offsetLeft
          )
        ) + "px";

      // 需要针对 iOS 越界弹性滚动的情况进行边界检查
      styles.top =
        Math.max(
          0,
          Math.min(
            document.documentElement.scrollHeight - visualViewport.height,
            visualViewport.offsetTop
          )
        ) + "px";

      styles.width = visualViewport.width + "px";
      styles.height = visualViewport.height + "px";
    } else {
      // 不支持 VisualViewport API 情况下（如 iOS 8~12）
      styles.bottom = "0";
      styles.left = "0";
      styles.width = windowInnerWidth + "px";
      styles.height = windowInnerHeight + "px";
    }

    return styles;
  }
  render() {
    console.log("aaaa", this.getStyles().height);
    return (
      <div className={style.wrap} style={this.getStyles()}>
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
        <div className={style.footer}>
          <input className={style.text} type="text" />
          <button className={style.submit}>提交</button>
        </div>
      </div>
    );
  }
}
