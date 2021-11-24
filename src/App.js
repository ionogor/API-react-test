import React, { useEffect, useState } from "react";
import "./components/style.css";
import List from "./components/List";
import ListPhoto from "./components/ListPhoto";
import ClassComponent from "./components/ClassComponent";
import { Component } from "react";

class App extends Component {
  state = {
    todos: [],
    inputVal: "",
  };

  handleInputChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  addNewTo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: this.state.inputVal,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  markCompleted = (id) => {
    this.state.todos.map((element) => {
      if (element.id === id) {
        this.setState({
          todos: [
            ...this.state.todos,
            {
              text: this.state.inputVal,
              id: Date.now(),
              completed: !element.completed,
            },
          ],
        });
      }
      return element;
    });
  };
  render() {
    console.log("input", this.state.inputVal);
    console.log("todos:", this.state.todos);
    return (
      <div class="apps">
        <form onSubmit={(event) => event.preventDefault()}>
          <h1>Todo list</h1>
          <input
            type="text"
            placeholder="Add todo..."
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addNewTo}>Todo add</button>
          <button>Delete add</button>
        </form>

        {this.state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                value={todo.completed}
                onClick={markCompleted(todo.id)}
              />
              {todo.text}
            </div>
          );
        })}

        {/* <List/> */}
        {/* <ListPhoto/> */}

        {/* <ClassComponent /> */}
      </div>
    );
  }
}

export default App;
