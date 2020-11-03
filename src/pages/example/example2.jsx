import { Button } from "antd";
// import { observer,inject } from 'mobx-react';
import React from "react";
class Example2 extends React.Component {
  handleClick = () => {
    setTimeout(() => {
        console.log('aaaaaaa', this.props.logan) 
      alert(this.props.count);
    }, 3000);
};
render() {
    return (
      <div>
        <h2>Calss</h2>
        <p>{this.props.count}</p>
        <Button type="primary" onClick={this.handleClick}>
          Click me
        </Button>
      </div>
    );
  }
}
export default Example2;
