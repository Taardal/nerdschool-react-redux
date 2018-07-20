import React from "react";
import Enzyme from "enzyme";
import AddTodo from "./AddTodo";

const props = {
  onCreateTodoItem: jest.fn()
};

describe("AddTodo", () => {
  it("renders", () => {
    const enzymeWrapper = Enzyme.shallow(<AddTodo {...props} />);
    expect(enzymeWrapper.find("div").hasClass("add-todo__container")).toBe(true);
    expect(enzymeWrapper.find("#addTodoInput").props().placeholder).toEqual("Do all the stuffz!");
    expect(enzymeWrapper.find("#addTodoButton").text()).toEqual("Add");
  });

  it("updates state on input change", () => {
    const enzymeWrapper = Enzyme.shallow(<AddTodo {...props} />);
    const userInput = "userInput";
    const event = { target: { name: "addTodoInput", value: userInput } };
    
    enzymeWrapper.find("#addTodoInput").simulate("change", event);
    
    expect(enzymeWrapper.state().userInput).toEqual(userInput);
  });

  it("requires user input to create todo on button click", () => {
    const enzymeWrapper = Enzyme.shallow(<AddTodo {...props} />);
    
    expect(enzymeWrapper.state().userInput.length === 0);
    enzymeWrapper.find("#addTodoButton").simulate("click");
    expect(props.onCreateTodoItem.mock.calls.length).toBe(0);

    enzymeWrapper.state().userInput = "Foo";
    enzymeWrapper.find("#addTodoButton").simulate("click");
    expect(props.onCreateTodoItem.mock.calls.length).toBe(1);
  });
});
