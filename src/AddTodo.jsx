import "./addTodo.css";
import React from "react";
import PropTypes from "prop-types";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onAddTodoButtonClick = this.onAddTodoButtonClick.bind(this);
  }

  onUserInputChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  onAddTodoButtonClick() {
    if (this.state.userInput.length > 0) {
      this.props.onCreateTodoItem(this.state.userInput);
    }
  }

  render() {
    return (
      <div className="add-todo__container">
        <input
          id="addTodoInput"
          type="text"
          onChange={this.onUserInputChange}
          placeholder="Do all the stuffz!"
        />
        <button
          id="addTodoButton"
          type="button"
          onClick={this.onAddTodoButtonClick}
        >
          Add
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onCreateTodoItem: PropTypes.func.isRequired
};

export default AddTodo;
