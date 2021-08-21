import './App.css';
import React from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList/TodoList';
import BottomBar from './Components/BottomBar/BottomBar';
import {Filter} from './utils/Enums';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            activeFilter: Filter.all,
        };
    }

    createTodo = (title) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {id: Date.now(), title, completed: false}
            ]
        });
    }
    removeToDo = (id) => {
        this.setState({
                todos: this.state.todos.filter(
                    item => item.id !== id
                )
            }
        );
    }
    toggleTodo = (id) => {
        this.setState({
                todos: this.state.todos.map(
                    item =>
                        item.id === id ?
                            {...item, completed: !item.completed} :
                            item
                )
            }
        );
    }
    updateTitle = (id, title) => {
        this.setState({
                todos: this.state.todos.map(
                    item =>
                        item.id === id ?
                            {...item, title} :
                            item
                )
            }
        );
    }
    updateFilter = (activeFilter) => {
        this.setState({
                activeFilter
            }
        );
    }

    toggleAll = () => {
        this.setState({
            todos: this.state.todos.map(
                item => {
                    const allTrue = this.state.todos.some(element => !element.completed)
                    if (allTrue) {
                        console.log('here')
                        return {...item, completed: true}
                    } else {
                        return {...item, completed: false}
                    }
                }
            )
        })
    }

    clearCompleted = () => {
        this.setState({
                todos: this.state.todos.filter(
                    item => item.completed === false
                )
            }
        );
    }
    render() {
        return (
            <section className="todoapp">
                <Header createTodo={this.createTodo}/>
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    removeToDo={this.removeToDo}
                    toggleAll={this.toggleAll}
                    updateTitle={this.updateTitle}
                    activeFilter={this.state.activeFilter}

                />
                {
                    this.state.todos.length > 0 &&
                    <BottomBar
                        haveComplited={this.haveCompleted}
                        todos={this.state.todos}
                        activeFilter={this.state.activeFilter}
                        updateFilter={this.updateFilter}
                        clearCompleted={this.clearCompleted}
                    />
                }

            </section>
        );
    }
}

export default App;
