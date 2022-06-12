import React from "react";
import Task from "./Task"

function TaskList( {tasks , category , resetAllTasks} ) {
  
  function deleteTask(e) {
    let text = e.target.parentNode.children[1].innerText
    let newTaskList = []
    tasks.forEach( (task)=>{
      if (task.text !== text) {
        newTaskList = [ ...newTaskList , task]
      }
    })
    resetAllTasks(newTaskList)
  }
  
  return (
    <div className="tasks">
      {tasks.filter((task)=>{
          if ( category === 'All'){
            return true
          } else {
            return task.category === category
          }
        }).map( (task)=> {
        return <Task key={task.text} task={task} handleClickX={deleteTask} />
      })}
    </div>
  );
}

export default TaskList;
