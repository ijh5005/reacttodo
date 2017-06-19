import React, { Component } from "react";
import { connect } from "react-redux";
import { adjustTodo } from "../actions/index";
import { bindActionCreators } from "redux";

class TodoInput extends Component {
  render() {
    return(
      <div className="inputDiv">
        <form onSubmit={ (e) => {
          e.preventDefault();
          const newTodo = document.querySelector(".add").value;
          document.querySelector(".add").value = "";
          document.querySelector(".add").blur();
          this.props.adjustTodo(newTodo, this.props.todoList, "add");
        } }>
          <input className="add"
                 type="text"
                 placeholder="enter your todo" />
        </form>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
