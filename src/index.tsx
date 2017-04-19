import * as React from "react";
import * as ReactDOM from "react-dom";
import './components/TodoList.css';
import TodoList from "./components/TodoList";

ReactDOM.render(
    <TodoList />,
    document.getElementById("app")
);