import React, { Component } from 'react';
import FlipMove from "react-flip-move";


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }


    createTasks(item) {
        console.log("createTask");
        return <li onClick={() => this.delete(item.key)} 
        key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }


    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={300} easing="ease-out">
                  {listItems}
                </FlipMove>
            </ul>

        );
    }
}

export default TodoItems;