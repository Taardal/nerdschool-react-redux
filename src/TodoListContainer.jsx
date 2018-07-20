import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { createTodo } from "./todoActions";
import Todo from "./Todo";

export class TodoListContainer extends React.Component {
  render() {
    return <TodoList todos={this.props.todos} />;
  }

  componentDidMount() {
    this.props.createTodoItem("Wake Up");
    this.props.createTodoItem("Do the dishes");
    this.props.createTodoItem("Fold clothes");
    this.props.createTodoItem("Browse Reddit");
  }
}

TodoListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
  createTodoItem: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  todos: state.todos
});

export const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
