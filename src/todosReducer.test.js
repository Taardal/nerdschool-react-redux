import todosReducer, { getCompletedTodos } from "./todosReducer";

describe("todos reducer", () => {
  it("creates a todo", () => {
    const description = "Description";
    const action = {
      type: "CREATE_TODO",
      description: description
    };
    const expectedTodos = [
      {
        id: 1,
        description: description,
        completed: false
      }
    ];
    expect(todosReducer([], action)).toEqual(expectedTodos);
  });

  it("toggles todo completed", () => {
    const id = 123;
    const initialTodos = [
      {
        id: id,
        description: "description",
        completed: false
      }
    ];
    const action = {
      type: "TOGGLE_TODO",
      id: id
    };
    
    const expectedTodos = [...initialTodos];
    expectedTodos[0].completed = true;
    
    expect(todosReducer(initialTodos, action)).toEqual(expectedTodos);
  });

  it("deletes a todo", () => {
    const id = 123;
    const initialTodos = [
      {
        id: id,
        description: "description",
        completed: false
      }
    ];
    const action = {
      type: "DELETE_TODO",
      id: id
    };
    expect(todosReducer(initialTodos, action).length === 0);
  });

  it("selects completed todos", () => {
    const todos = [
      {
        id: 1,
        description: "description",
        completed: false
      },
      {
        id: 2,
        description: "description",
        completed: true
      }
    ];

    expect(getCompletedTodos({ todos: todos }).length).toEqual(1);
  })
});
