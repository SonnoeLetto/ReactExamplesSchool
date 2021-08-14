import React from "react";

class TodoItem extends React.Component {
    render() {
        return(
            <li className="">
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.item.completed}
                        onChange={() => this.props.toggleTodo(this.props.item.id)} />
                    <label>{this.props.item.title}</label>
                    <button 
                        className="destroy"
                        onClick={() => this.props.removeToDo(this.props.item.id)}
                    ></button>
                </div>
            </li>
        );
    }
}

export default TodoItem;