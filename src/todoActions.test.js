import { createTodo, toggleTodo, deleteTodo } from "./todoActions";

describe("todo actions", () => {
  it("returns create action", () => {
    const description = "Description";
    const expectedAction = {
      type: "CREATE_TODO",
      description: description
    };
    expect(createTodo(description)).toEqual(expectedAction);
  });

  it("returns toggle action", () => {
    const id = 666;
    const expectedAction = {
      type: "TOGGLE_TODO",
      id: id
    };
    expect(toggleTodo(id)).toEqual(expectedAction);
  });

  it("returns delete action", () => {
    const id = 123;
    const expectedAction = {
      type: "DELETE_TODO",
      id: id
    };
    expect(deleteTodo(id)).toEqual(expectedAction);
  });
});
