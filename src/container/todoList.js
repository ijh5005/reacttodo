import React, { Component } from "react";
import { connect } from "react-redux";
import { adjustTodo } from "../actions/index";
import { bindActionCreators } from "redux";

class TodoList extends Component {
  renderList() {
    let count = 0;
    return (
        this.props.todoList.map((item, index) => {
          count++;
          return (
            <li key={index} >
              { item }
              <button
                onClick={() => {
                  this.props.adjustTodo(index, this.props.todoList);
                }} > X </button>
            </li>
          );
        })
    );
  }

  render() {
    return (
      <ol className="ol">
        {this.renderList()}
      </ol>
    )
  }
}

function mapStateToProps(state){
  return {
    todoList: state.todoList,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ adjustTodo: adjustTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
