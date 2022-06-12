import React , { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ allTasks , setAllTasks ] = useState(TASKS)
  const [ category , setCategory ] = useState('All')
  const modifiedCategories = [...CATEGORIES].slice(1)
  const [ newItem , setNewItem ] = useState({
    text: '',
    category: 'Code'
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory}/>
      <NewTaskForm categories={modifiedCategories} setAllTasks={setAllTasks} allTasks={allTasks} setNewItem = {setNewItem} newItem={newItem}/>
      <TaskList tasks={allTasks} category ={category} resetAllTasks={setAllTasks}/>
    </div>
  );
}

export default App;
