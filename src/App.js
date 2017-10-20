import React, { Component } from 'react';
import './css/App.css';
import './css/ColorThemes.css';
import TodoList from './components/TodoList';
import CalendarModal from './components/CalendarModal';
import SideMenu from './components/SideMenu';
import Sidebar from 'react-sidebar';

class App extends Component {
  constructor(props){
    super(props);

    // initialize state
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const counter = localStorage.getItem('counter') || 0;
    const themeNumber = localStorage.getItem('themeNumber') || "theme-5";

    var timeNow = new Date();
    console.log('timeNow.toDateString()', timeNow.toDateString());
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
        continue;
      }
      if(!isRepeating && !todos[i].completed){
        todos[i].render = true;
      }
      if(isRepeating){
        todos[i].render = true;
      }
    }
    this.state = {
      counter,
      todos,
      displayMode: 'SHOW ALL',
      calendarModalForTaskId: 0,
      showCalendar: false,
      themeNumber,
      sidebarOpen: false
    }
    localStorage.setItem('todos', JSON.stringify(todos));
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
    localStorage.setItem('counter', parseInt(this.state.counter, 10) + 1);
    this.setState({
      counter: parseInt(this.state.counter, 10) + 1,
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

  // deleteAllTask(){
  //   localStorage.clear();
  //   this.setState({
  //     counter: 0,
  //     todos: [],
  //     editing: false
  //   })
  // }

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

    switch(this.state.displayMode){
      case 'SHOW ALL': // switch to SHOW TODAY
        const timeNow = new Date();
        for(var i=0; i<todos.length; i++){
          if(todos[i].daysOfWeek[timeNow.getDay()]){
            todos[i].render = true;
          } else {
            todos[i].render = false;
          }

        }
        this.setState({
          displayMode: 'SHOW TODAY',
          todos
        })
      break;

      case 'SHOW TODAY': // switch to SHOW DUEDATES
        for(var i=0; i<todos.length; i++){
          if(todos[i].dueDate){
            todos[i].render = true;
          } else {
            todos[i].render = false;
          }

        }
        this.setState({
          displayMode: 'SHOW DUEDATES',
          todos
        })
      break;

      case 'SHOW DUEDATES': // switch to SHOW ALL
        for(var i=0; i<todos.length; i++){
          todos[i].render = true;
        }
        this.setState({
          displayMode: 'SHOW ALL',
          todos
        })
      break;

      default:
      break;
    }
  }

  // Calendar
  handleOpenCalendar(taskId){
    this.setState({
      showCalendar: true,
      calendarModalForTaskId: taskId
    })
  }

  handleCloseCalendar(){
    this.setState({
      showCalendar: false,
      calendarModalForTaskId: -1
    })
  }

  selectDueDate(dueDate){
    let newTodoList = this.state.todos;
    for(var i=0; i<newTodoList.length; i++){
      if(newTodoList[i].id === this.state.calendarModalForTaskId){
        if(!dueDate){
          newTodoList[i].dueDate = null;
        } else {
          newTodoList[i].dueDate = String(dueDate.getTime());
        }
        break;
      }
    }
    this.updateTaskList(newTodoList);
    this.handleCloseCalendar();
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <SideMenu
            themeNumber={this.state.themeNumber}
          />
        }
        docked={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen.bind(this)}
      >
               <div className={this.state.themeNumber + " App"}>
                 <button onClick={()=>{this.setState({sidebarOpen: !this.state.sidebarOpen})}}>Test</button>
                 <button
                   className={this.state.themeNumber + " toggle-showall-button"}
                   onClick={this.toggleShowAll.bind(this)}
                  >
                   {this.state.displayMode}
                 </button>

                 <CalendarModal
                   handleOpenCalendar={this.handleOpenCalendar.bind(this)}
                   handleCloseCalendar={this.handleCloseCalendar.bind(this)}
                   showCalendar={this.state.showCalendar}
                   selectDueDate={this.selectDueDate.bind(this)}
                   themeNumber={this.state.themeNumber}
                 />

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
                   handleOpenCalendar={this.handleOpenCalendar.bind(this)}
                   themeNumber={this.state.themeNumber}
                 />
               </div>
      </Sidebar>
    );
  }
}

export default App;
