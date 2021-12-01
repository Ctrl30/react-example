import React, { Component } from 'react'
import style from './demo5.scss';

export default class componentName extends Component {
    state={
        btnStyle: {}
    }
    componentDidMount() {
        if (typeof window.visualViewport !== "undefined") {
          window.visualViewport.addEventListener(
            "resize",
            this.onVisualViewportChange
          );
        }
      }
      onVisualViewportChange = (e) => {
          console.log('visualViewport', e.target.height)
          if(e.target.height !== document.documentElement.clientHeight){
              this.setState({
                btnStyle: {bottom: 9999}
              })
          }else{
            this.setState({
                btnStyle: {bottom: 0}
              })  
          }
          console.log('aa', document.documentElement.clientHeight)
      };
    render() {
        return (
            <div className={style.wrap}>
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <button className={style.btn} style={{...this.state.btnStyle}}>提交</button>
            </div>
        )
    }
}
