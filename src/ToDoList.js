import React, {
    Component
} from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    //пропсы - чтобы в одном компоненте поместить данные и методы, которые с ним работают
    constructor(props) { //
        super(props);

        this.state = {
            items: []
        };

    }

    addItem = (e) => {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();

    }

    deleteItem = (key) => {
        
        console.log ("Key = " + key);
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems // !!разобраться со значением данной функции
        });
    }

    
    render() {
        return ( <
            div className = "todoListMain" >
            <
            div className = "header" >
            <
            form onSubmit = {
                this.addItem
            } > {
                /* при нажатии на кнопку в форме происходит добавление элемента  */ } <
            input ref = {
                (a) => this._inputElement = a
            }
            placeholder = "Enter task" >
            <
            /input> <
            button type = "submit" > Add < /button> <
            /form>  <
            /div> <
            TodoItems entries = {
                this.state.items
            }
            delete = {
                this.deleteItem
            }
            /> <
            /div>

        );
    }
}

export default TodoList;