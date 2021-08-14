import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
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
                        
                        this.props.todos.map(
                            item =>
                            <TodoItem key={item.id} item={item} toggleTodo={this.props.toggleTodo} removeToDo={this.props.removeToDo} />
                        )
                        
                    }
                </ul>
			</section>
        );
    }
}

export default TodoList;