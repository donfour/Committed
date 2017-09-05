import React from 'react';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// helper function
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class TodoList extends React.Component{
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.props.updateTaskList(items);
  }

  render(){
    return(
      <div>
        {this.props.todos.map((item)=>(
          <TodoItem name={item.name} daysOfWeek={item.daysOfWeek} completed={item.completed}/>
        ))}
      </div>
    )
  }
}
