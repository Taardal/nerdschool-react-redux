import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import TodoItemContainer from "./TodoItemContainer";

const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => <TodoItemContainer key={todo.id} todo={todo} />)}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo))
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList;
