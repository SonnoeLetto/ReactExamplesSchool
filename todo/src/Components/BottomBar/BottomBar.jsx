import React from 'react'
import FilterItem from "./FilterItem";

class BottomBar extends React.Component {
    render() {
        return (
            <footer className="footer" style={{display: "block"}}>
            <span className="todo-count"><strong>3</strong> items left</span>
            <ul className="filters">
                <FilterItem href={'href="#/"'} className={'active'}>Active</FilterItem>
                <FilterItem href={'#/active'}>All</FilterItem>
                <FilterItem href={'#/completed'}>Completed</FilterItem>
            </ul>
            <button className="clear-completed" style={{display:"none"}}></button>
            </footer>
        )
    }
}

export default BottomBar