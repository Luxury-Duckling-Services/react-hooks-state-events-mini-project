import React from "react";

function Task( {task , handleClickX} ) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={(e)=>handleClickX(e)}>X</button>
    </div>
  );
}

export default Task;
