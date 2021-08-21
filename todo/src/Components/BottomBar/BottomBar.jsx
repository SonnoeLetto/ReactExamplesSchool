import React from 'react'
import FilterItem from "./FilterItem";
import { Filter } from '../../utils/Enums';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);

        this.filterConfig = [
            {id: Filter.all, title: "All"},
            {id: Filter.active, title: "Active"},
            {id: Filter.completed, title: "Complited"},
        ]
    }

    render() {
        return (
            <footer className="footer" style={{display: "block"}}>
            <span className="todo-count"><strong>{this.props.todos.filter(item => !item.completed).length}</strong> items left</span>
            <ul className="filters">
                {
                    this.filterConfig.map(filterItem => (
                        <FilterItem 
                            key={filterItem.id} 
                            item={filterItem} 
                            isActive={this.props.activeFilter === filterItem.id}
                            onClick={this.props.updateFilter}
                        />)
                    )
                }

            </ul>
            <button onClick={this.props.clearCompleted} className="clear-completed" style={{ display: this.props.todos.some(item => item.completed) === true  ? "block" : "none"}}>Clear completed</button>
            </footer>
        )
    }
}

export default BottomBar