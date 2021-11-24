import React from "react";
import { Component } from "react";

class ClassComponent extends React.Component {
  state = {
    message: "Hello Class",
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <div>{this.state.count}</div>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default ClassComponent;
