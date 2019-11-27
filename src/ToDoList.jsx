import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  //пропсы - чтобы в одном компоненте поместить данные и методы, которые с ним работают
  constructor(props) {
    //
    super(props);

    this.state = {
      items: []
    };
  }

  addItem = e => {
    if (this._inputElement.value !== "") {
      const newItem = {
        //создаётся объект содержащий введённые данные и ключ
        text: this._inputElement.value,
        key: Date.now()
      };

      // возвращает масстив состоящий из массива, на котором он был вызван,
      // соединённого с другими массивами или значениями, переданными в качестве аргументов
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = ""; //очищаем поле input

    // console.log(this.state.items);

    e.preventDefault(); //блокируем автообновление страницы после добавления элемента
  };

  deleteItem = key => {
    // console.log ("Key = " + key);
    let filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems // !!разобраться со значением данной функции
    });
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="Enter task"
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
