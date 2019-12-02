import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import TodoList from "./ToDoList"; //добавили файл с созданным элементом


const destination = document.querySelector("#container"); //метод который возвращает нам выбранный селектор.

ReactDOM.render(
  //рендеринг реакт элемента. Обновление элемента
  //Provider делает стор доступным всем контейнерам в приложении
  <Provider>
    <TodoList />
  </Provider>, //использование компонента из импорта
  destination
);


