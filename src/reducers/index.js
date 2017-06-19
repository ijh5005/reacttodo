import { combineReducers } from 'redux';
import TodoList from "./reducerList";
import LastCompleted from "./reducerLastCompleted";

const rootReducer = combineReducers({
  todoList: TodoList,
  lastCompleted: LastCompleted
});

export default rootReducer;
