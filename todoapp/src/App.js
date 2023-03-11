// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'call insurance'},
      {id: 2, content: 'buy adapter'},
      {id: 3, content: 'call Z'},
      {id: 4, content: 'buy flight ticket'},
      {id: 5, content: 'call Holly'},
      {id: 6, content: 'buy face wash'},
      {id: 7, content: 'buy luggage scale'},

    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })

  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center green-text">To-Do List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;