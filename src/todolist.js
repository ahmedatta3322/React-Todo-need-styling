import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";
class Todolist extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Todo
        todo={todo}
        done={this.props.done}
        id={this.props}
        del={this.props.del}
      />
    ));
  }
}

export default Todolist;
