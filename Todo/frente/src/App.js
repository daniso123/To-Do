import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Header from './components/Header';
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          TO DO LIST
        </Header>
        <TodoList />
      </div>
    );
  }
}

export default App;
