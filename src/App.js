import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

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

  markComplete = () => {
    console.log("Hello from App.js");
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
