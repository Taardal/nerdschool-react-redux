import React from "react";
import Enzyme from "enzyme";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

const defaultProps = {
  onToggleTodo: jest.fn(),
  onDeleteTodo: jest.fn()
};

describe("TodoItem", () => {
  it("renders", () => {
    const props = { ...defaultProps, todo: new Todo(1, "Description")}
    const enzymeWrapper = Enzyme.shallow(<TodoItem {...props} />);
    const checkboxId = `todoItemCheckbox-${props.todo.id}`;
    
    expect(enzymeWrapper.find({ type: "checkbox" }).props().id).toBe(checkboxId);
    expect(enzymeWrapper.find("label").props().htmlFor).toBe(checkboxId);
    expect(enzymeWrapper.find("label").text()).toBe(props.todo.description);
    expect(enzymeWrapper.find({ type: "button" }).props().value).toBe("Delete");
  });

  it("toggles todo completed state on checkbox change", () => {
    const props = { ...defaultProps, todo: new Todo(1, "Description")}
    const enzymeWrapper = Enzyme.shallow(<TodoItem {...props} />);
    const checkboxId = `#todoItemCheckbox-${props.todo.id}`;

    props.todo.completed = false;
    enzymeWrapper.setState({
      isCompleted: false
    });
    
    enzymeWrapper.find(checkboxId).simulate("change", {
      target: {
        name: checkboxId,
        value: true
      }
    });

    expect(enzymeWrapper.state().isCompleted).toBe(true);
    expect(props.onToggleTodo.mock.calls.length).toBe(1);
  })

  it("deletes todo on button click", () => {
    const props = { ...defaultProps, todo: new Todo(1, "Description")}
    const enzymeWrapper = Enzyme.shallow(<TodoItem {...props} />);

    enzymeWrapper.find({ type: "button" }).simulate("click");

    expect(props.onDeleteTodo.mock.calls.length).toBe(1);
  })
});
