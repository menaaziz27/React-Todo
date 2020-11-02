import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "washing plates",
        completed: false
      },
      {
        id: 2,
        title: "hanging out",
        completed: false
      },
      {
        id: 3,
        title: "Study math",
        completed: false
      },
    ],

  }
  // Toggle Delete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    })
  }

  // Delete Todo
  delTodo = id =>
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });


  // Add Todo
  AddTodo = title => console.log(title);
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.AddTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
