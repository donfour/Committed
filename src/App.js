import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    todos: [
      {
        id: 0,
        name: 'Work out',
        daysOfWeek: [true, false, false, false, false, false, false],
        completed: true
      },
      {
        id: 1,
        name: 'Do 3 questions on Leetcode',
        daysOfWeek: [true, false, true, false, true, false, false],
        completed: false
      },
    ]
  }

  createNewTask(taskName){
    const newTodo = {
      name: taskName,
      daysOfWeek: [false, false, false, false, false, false, false],
      completed: false
    }

    const newTodoList = this.state.todos.push(newTodo)

    this.setState({
      todos: newTodoList
    })
  }

  updateTaskList(newTodoList){
    this.setState({
      todos: newTodoList
    })
  }

  toggleTaskCompletion(taskId){
    let newTodoList = this.state.todos;
    newTodoList[taskId].completed = !newTodoList[taskId].completed;
    this.setState({
      todos: newTodoList
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} updateTaskList={this.updateTaskList.bind(this)}/>
      </div>
    );
  }
}

export default App;
