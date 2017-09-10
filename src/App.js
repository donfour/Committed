import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';

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
      if(!isRepeating && todos[i].completed && todos[i].dayCompleted !== 'Mon Sep 11 2017'){ //TODO: timeNow.toDateString()
        console.log('I"m here!');
        todos.splice(i,1);
        i--;
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
      render: true
    }

    var newTodoList = this.state.todos.slice(0);
    newTodoList.push(newTodo);

    // save results
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    localStorage.setItem('counter', parseInt(this.state.counter) + 1);
    this.setState({
      counter: parseInt(this.state.counter) + 1,
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
      todos: []
    })
  }

  // componentWillMount(){
  //   const todos = JSON.parse(localStorage.getItem('todos')) || [];
  //   const counter = localStorage.getItem('counter') || 0;
  //
  //   console.log('todos:', todos);
  //   console.log('counter:', counter);
  //
  //   var timeNow = new Date();
  //   console.log('timeNow.toDateString()', timeNow.toDateString());
  //
  //   // remove completed one-time todos
  //   for(var i=0; i<todos.length; i++){
  //     // check if the todo is repeating, i.e. one-time
  //     var isRepeating = false;
  //     for(var j=0; j<todos[i].daysOfWeek.length; j++){
  //       if(todos[i].daysOfWeek[j]){
  //         isRepeating = true;
  //         break;
  //       }
  //     }
  //     console.log('isRepeating', isRepeating);
  //     console.log('todos[i].dayCompleted', todos[i].dayCompleted);
  //     console.log('todos[i].completed', todos[i].completed);
  //
  //     if(!isRepeating && todos[i].completed && todos[i].dayCompleted !== 'Mon Sep 11 2017'){
  //       console.log('I"m here!');
  //       this.deleteTask(todos[i].id);
  //     }
  //
  //   }
  //
  //   this.setState({
  //     todos,
  //     counter
  //   })
  // }

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
