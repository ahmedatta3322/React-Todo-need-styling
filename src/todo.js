import React, { Component } from "react";
import ReactDOM from "react-dom";

class Todo extends Component {
  setstyle = e => {
    if (this.props.todo.done) {
      return { textDecoration: "line-through" };
    }
  };
  render() {
    const close = {
      color: "red",
      borderRadius: "50%",
      marginLeft: "2vw"
    };
    return (
      <div style={this.setstyle()}>
        <input
          type="checkbox"
          onChange={this.props.done.bind(this, this.props.todo.id)}
        />
        {this.props.todo.title}
        <button
          onClick={this.props.del.bind(this, this.props.todo.id)}
          style={close}
        >
          X
        </button>
      </div>
    );
  }
}

export default Todo;
