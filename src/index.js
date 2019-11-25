import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./ToDoList"; //добавили файл с созданным элементом

var destination = document.querySelector("#container");

ReactDOM.render( //рендеринг реакт элемента. Обновление элемента
    <div>
        <TodoList/> 
    </div>, //использование компонента из импорта
    destination

);


