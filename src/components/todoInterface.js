import React, { Component } from "react";
import TodoInput from "../container/todoInput";
import TodoList from "../container/todoList";


export default class TodoInterface extends Component {
  render() {
    return(
      <div className="todoInterface">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
