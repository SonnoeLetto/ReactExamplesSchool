import React from "react";
import TodoItem from "./TodoItem";
import {Filter} from "../../utils/Enums";

class TodoList extends React.Component {

    filterToDo = () => {
        switch(this.props.activeFilter) {
            case Filter.active:
                return this.props.todos.filter(item => !item.completed);
            case Filter.completed:
                return this.props.todos.filter(item => item.completed);
            default:
                return this.props.todos;
        }
    }
    render() {
        return(
            <section className="main" style={{display: "block"}}>
				<input 
                id="toggle-all" 
                className="toggle-all" 
                type="checkbox" 
                onChange={this.props.toggleAll}
                />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
                    {
                        
                        this.filterToDo().map(
                            item =>
                            <TodoItem
                                key={item.id}
                                item={item}
                                toggleTodo={this.props.toggleTodo}
                                removeToDo={this.props.removeToDo}
                                    updateTitle={this.props.updateTitle}

                            />
                        )
                        
                    }
                </ul>
			</section>
        );
    }
}

export default TodoList;