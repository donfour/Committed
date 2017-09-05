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
      this.props.todos,
      result.source.index,
      result.destination.index
    );

    this.props.updateTaskList(items);
  }

  render(){
    return(
      <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {this.props.todos.map((item)=>(
                <Draggable key={item.id} draggableId={item.id}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={provided.draggableStyle}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem name={item.name} daysOfWeek={item.daysOfWeek} completed={item.completed}/>
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
