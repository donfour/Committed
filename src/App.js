import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';
import GithubIcon from './components/GithubIcon';

class App extends Component {
  constructor(props){
    super(props);

    // initialize state
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const counter = localStorage.getItem('counter') || 0;

    var timeNow = new Date();
    // remove completed one-time todos
    for(var i=0; i<todos.length; i++){
      // check if the todo is repeating, i.e. one-time
      var isRepeating = false;
      for(var j=0; j<todos[i].daysOfWeek.length; j++){
        if(todos[i].daysOfWeek[j]){
          isRepeating = true;
          break;
        }
      }
      if(!isRepeating && todos[i].completed && todos[i].dayCompleted !== timeNow.toDateString()){
        todos.splice(i,1);
        i--;
      }
      if(!isRepeating && !todos[i].completed){
        todos[i].render = true;
      }
      if(isRepeating){
        if(todos[i].completed && todos[i].dayCompleted !== 'Mon Sep 11 2017'){
          todos[i].completed = false;
        }
        if(todos[i].daysOfWeek[timeNow.getDay()]){
          todos[i].render = true;
        } else {
          todos[i].render = false;
        }
      }
    }
    this.state = {
      counter,
      todos
    }
  }

  createNewTask(taskName){
    var timeNow = new Date();
    var newTodo = {
      id: this.state.counter,
      name: taskName,
      daysOfWeek: [false, false, false, false, false, false, false],
      completed: false,
      dayCompleted: timeNow.toDateString(),
      render: true,
      editing: false,
      dueDate: null
    }

    var newTodoList = this.state.todos.slice(0);
    newTodoList.push(newTodo);

    // save results
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    localStorage.setItem('counter', parseInt(this.state.counter) + 1);
    this.setState({
      counter: parseInt(this.state.counter) + 1,
      todos: newTodoList,
      showAll: false,
      date: null,
      focused: false
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
        var timeNow = new Date();
        newTodoList[i].completed = !newTodoList[i].completed;
        newTodoList[i].dayCompleted = timeNow.toDateString();
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

  deleteAllTask(){
    localStorage.clear();
    this.setState({
      counter: 0,
      todos: [],
      editing: false
    })
  }

  startEditMode(taskId){
    this.setState({
      editing: true
    })
    var newTodoList = this.state.todos;
    for(var i=0; i<newTodoList.length; i++){
      if(newTodoList[i].id===taskId){
        newTodoList[i].editing = true;
      } else {
        newTodoList[i].editing = false;
      }
    }
    this.updateTaskList(newTodoList);
  }

  endEditMode(taskId, newName){
    this.setState({
      editing: false
    })
    var newTodoList = this.state.todos;
    for(var i=0; i<newTodoList.length; i++){
      newTodoList[i].editing = false;
      if(newTodoList[i].id===taskId){
        newTodoList[i].name = newName;
      }
    }
    this.updateTaskList(newTodoList);
  }

  toggleShowAll(){
    var todos = this.state.todos;

    if(this.state.showAll){
      var timeNow = new Date();
      // remove completed one-time todos
      for(var i=0; i<todos.length; i++){
        // check if the todo is repeating, i.e. one-time
        var isRepeating = false;
        for(var j=0; j<todos[i].daysOfWeek.length; j++){
          if(todos[i].daysOfWeek[j]){
            isRepeating = true;
            break;
          }
        }
        if(isRepeating){
          if(todos[i].daysOfWeek[timeNow.getDay()]){
            todos[i].render = true;
          } else {
            todos[i].render = false;
          }
        }
      }
      this.setState({
        showAll: false,
        todos
      })
    } else {
      for(var i=0; i<todos.length; i++){
        todos[i].render = true;
      }
      this.setState({
        showAll: true,
        todos
      })
    }
  }

  render() {
    return (
      <div className="App">

        <button
          className="toggle-showall-button"
          onClick={this.toggleShowAll.bind(this)}
        >
          {this.state.showAll ? 'show all' : 'show today'}
        </button>

        <div className="fox-icon-container">
          <a href="https://donfour.github.io/donovanso/" target="_blank">
            <svg width="100%" height="100%" viewBox="0 0 200 200">
              <path className="fox" d="M100,192.8c-24.2-47.9-75.3-71.2-75.3-71.2V15.2c0,0,46.8,4.5,46.8,42.2h57c0-37.6,46.8-42.2,46.8-42.2v106.5 C175.3,121.6,124.2,145,100,192.8z"/>
            </svg>
          </a>
        </div>

        <GithubIcon/>

        <TodoList
          editing={this.state.editing}
          todos={this.state.todos}
          updateTaskList={this.updateTaskList.bind(this)}
          toggleTaskCompletion={this.toggleTaskCompletion.bind(this)}
          toggleDayOfWeek={this.toggleDayOfWeek.bind(this)}
          createNewTask={this.createNewTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          startEditMode={this.startEditMode.bind(this)}
          endEditMode={this.endEditMode.bind(this)}
        />
      </div>
    );
  }
}

export default App;
