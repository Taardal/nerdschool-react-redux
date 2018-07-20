import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Todo from "./Todo";
import { toggleTodo, deleteTodo } from "./todoActions";

const TodoItemContainer = props => <TodoItem {...props} />;

TodoItemContainer.propTypes = {
  todo: PropTypes.instanceOf(Todo),
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  onToggleTodo: id => dispatch(toggleTodo(id)),
  onDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItemContainer);
