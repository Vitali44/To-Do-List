import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./ToDoList";

var destination = document.querySelector("#container");

ReactDOM.render( //рендеринг реакт элемента. Обновление элемента
    <div>
        <TodoList/>
    </div>,
    destination

);