import React, { Component } from "react";

class State1 extends Component {
  state = {
    index: 1,
  };
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("SetState调用setState");
    this.setState({
      index: this.state.index + 1,
    });
    console.log("state", this.state.index);

    console.log("SetState调用setState");
    this.setState({
      index: this.state.index + 1,
    });
    console.log("state", this.state.index);
  }

  render() {
    return <div>state1</div>;
  }
}
export default State1;
