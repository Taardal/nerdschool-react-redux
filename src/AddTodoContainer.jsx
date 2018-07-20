import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { createTodo } from "./todoActions";

const AddTodoContainer = ({ onCreateTodoItem }) => <AddTodo onCreateTodoItem={onCreateTodoItem} />;

AddTodoContainer.propTypes = {
  onCreateTodoItem: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  onCreateTodoItem: description => dispatch(createTodo(description))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodoContainer);
