import React, { Component } from 'react';
import logo from './logo-todo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TodoList</h2>
        </div>
        <p className="App-intro">
            <TodoList />
        </p>
      </div>
    );
  }
}

export default App;