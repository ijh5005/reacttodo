import React, { Component } from 'react';
import LastCompleted from "../container/lastCompleted";
import TodoInterface from "./todoInterface";

export default class App extends Component {
  render() {
    return (
      <div className="liner flex">
        <LastCompleted />
        <TodoInterface />
      </div>
    );
  }
}
