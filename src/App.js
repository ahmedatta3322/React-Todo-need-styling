import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todolist from "./todolist";
import Todo from "./todo";
import "./styles.css";
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "ahmed1",
        done: false
      }
    ]
  };

  done = e => {
    this.state.todos.map(todo => {
      if (todo.id == e) {
        this.setState({ todo: (todo.done = !todo.done) });
      }
    });
  };
  del = e => {
    console.log(...this.state.todos);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== e)]
    });
  };

  save = e => {
    let value = document.getElementById("value").value;
    let id = [...this.state.todos].length + 1;
    //console.log(id);
    const t = { id: id, title: value, desc: 3, done: false };
    this.setState({ todos: [...this.state.todos, t] });
    document.getElementById("value").value = "";
    console.log(this.state.todos);
  };
  render() {
    const inputsyle = {
      width: "50%"
    };
    const buttonsyle = {
      float: "right",
      backgroundColor: "red"
    };
    return (
      <div className="App">
        <input type={"text"} id={"value"} style={inputsyle} />
        <button onClick={this.save} style={buttonsyle}>
          Save the task
        </button>
        <Todolist
          todos={this.state.todos}
          key={this.state.todos.id}
          done={this.done}
          del={this.del}
        />
      </div>
    );
  }
}

export default App;
