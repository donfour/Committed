import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    counter: 0,
    todos: []
  }

  createNewTask(taskName){

    var newTodo = {
      id: this.state.counter,
      name: taskName,
      daysOfWeek: [false, false, false, false, false, false, false],
      completed: false
    }

    var newTodoList = this.state.todos.slice(0);
    newTodoList.push(newTodo);

    // save results
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    localStorage.setItem('counter', this.state.counter + 1);
    this.setState({
      counter: this.state.counter + 1,
      todos: newTodoList
    })
  }

  updateTaskList(newTodoList){
    this.setState({
      todos: newTodoList
    })
    localStorage.setItem('todos', JSON.stringify(newTodoList));
  }

  toggleTaskCompletion(taskId){
    let newTodoList = this.state.todos;
    for(var i=0; i<newTodoList.length; i++){
      if(newTodoList[i].id===taskId){
        newTodoList[i].completed = !newTodoList[i].completed;
        break;
      }
    }
    this.updateTaskList(newTodoList);
  }

  toggleDayOfWeek(taskId, dayOfWeek){
    let newTodoList = this.state.todos;
    for(var i=0; i<newTodoList.length; i++){
      if(newTodoList[i].id===taskId){
        newTodoList[i].daysOfWeek[dayOfWeek] = !newTodoList[i].daysOfWeek[dayOfWeek];
        break;
      }
    }
    this.updateTaskList(newTodoList);
  }

  deleteTask(taskId){
    var newTodoList = this.state.todos;
    for(var i=0; i<newTodoList.length; i++){
      if(newTodoList[i].id===taskId){
        newTodoList.splice(i,1);
        break;
      }
    }
    this.updateTaskList(newTodoList);
  }

  componentDidMount(){
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const counter = localStorage.getItem('counter') || 0;
    console.log('todos:', todos);
    console.log('counter:', counter);
    this.setState({
      todos,
      counter
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList
          todos={this.state.todos}
          updateTaskList={this.updateTaskList.bind(this)}
          toggleTaskCompletion={this.toggleTaskCompletion.bind(this)}
          toggleDayOfWeek={this.toggleDayOfWeek.bind(this)}
          createNewTask={this.createNewTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
