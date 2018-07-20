import "./app.css";
import React from "react";
import SummaryContainer from "./SummaryContainer";
import AddTodoContainer from "./AddTodoContainer";
import TodoListContainer from "./TodoListContainer";

const App = () => (
  <div className="app">
    <h1>My Todo App</h1>
    <SummaryContainer />
    <AddTodoContainer />
    <TodoListContainer />
  </div>
);

export default App;
