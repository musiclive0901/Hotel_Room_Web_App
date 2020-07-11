import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  decreaseIncrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset()}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.props.children}
        <span style={this.styles} className="badge badge-primary m-2">
          {this.state.count}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={this.decreaseIncrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Counter;
