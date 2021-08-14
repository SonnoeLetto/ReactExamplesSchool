import './App.css';
import React from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList/TodoList';
import BottomBar from './Components/BottomBar/BottomBar';

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          todos: [],
      };
      this.count = false;
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
  toggleAll = () => {
    this.setState({
      todos: this.state.todos.map(
        item => {
          if(!this.count) {
            return {...item, completed: true}
          } else {
            return {...item, completed: false}
          }
        } 
      )
    })
    this.count = !this.count
  }

  // removeToDo = (id) => {
  //   const find = this.state.todos.findIndex(
  //     (el) => el.id === id)
  //     console.log(find)
  //   this.setState({
  //     todos: this.state.todos.splice(find, 1)
  //   })
  //   console.log(this.state.todos)
  // }
  
  render() {
    return (
        <section className="todoapp">
          <Header createTodo={this.createTodo}/>
          <TodoList 
            todos={this.state.todos} 
            toggleTodo={this.toggleTodo} 
            removeToDo={this.removeToDo}
            toggleAll={this.toggleAll}
          />
          <BottomBar/>
        </section>
      );
  }
}

export default App;
