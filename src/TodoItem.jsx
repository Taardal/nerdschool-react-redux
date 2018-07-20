import "./todoItem.css";
import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: props.todo.completed
    };
    this.onToggle = this.onToggle.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onToggle() {
    const { todo, onToggleTodo } = this.props;
    this.setState({
      isCompleted: !todo.completed
    });
    onToggleTodo(todo.id);
  }

  onDelete() {
    const { todo, onDeleteTodo } = this.props;
    onDeleteTodo(todo.id);
  }

  render() {
    const { id, description, completed } = this.props.todo;
    return (
      <div className="todo-item__container">
        <div>
          <input
            type="checkbox"
            id={`todoItemCheckbox-${id}`}
            onChange={this.onToggle}
            checked={this.isCompleted}
          />
          <label
            className={completed ? "todo-item__completed" : undefined}
            htmlFor={`todoItemCheckbox-${id}`}
          >
            {description}
          </label>
        </div>
        <input type="button" value="Delete" onClick={this.onDelete} />
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Todo),
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
