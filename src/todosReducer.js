import Todo from "./Todo";

const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...todos, new Todo(todos.length + 1, action.description)];
    case "TOGGLE_TODO":
      const newTodos = [...todos];
      const todo = newTodos.find(todo => todo.id === action.id);
      todo.completed = !todo.completed;
      return newTodos;
    case "DELETE_TODO":
      return todos.filter(todo => todo.id !== action.id);
    default:
      return [];
  }
};

export const getCompletedTodos = (state) => {
  return state.todos.filter(todo => todo.completed);
}

export default todosReducer;
