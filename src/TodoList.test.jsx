import React from "react";
import Enzyme from "enzyme";
import TodoList from "./TodoList";
import Todo from "./Todo";

jest.mock("./TodoItemContainer", () => () => <div className="TodoItemContainer" />);

const props = {
  todos: [
    new Todo(1, "Procrastinate"), new Todo(2, "Procrastinate some more")]
};

describe("TodoList", () => {
  it("renders todo items from list of todos from props", () => {
    const enzymeWrapper = Enzyme.mount(<TodoList todos={props.todos} />);
    const todoItems = enzymeWrapper.find(".TodoItemContainer");
    expect(todoItems.length).toBe(props.todos.length);
  });
});
