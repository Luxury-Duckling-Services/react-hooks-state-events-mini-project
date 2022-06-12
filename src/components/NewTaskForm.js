import React from "react";

function NewTaskForm( { categories , setNewItem , newItem , setAllTasks , allTasks }) {
  function setNewText(e) {    
    setNewItem(
      {...newItem ,
        text: e.target.value
      }
    )
  }

  function setNewCategory(e) {
    setNewItem(
      {...newItem ,
        category: e.target.value
      }
    )
  }

  function addToList(e) {
    e.preventDefault()
    setAllTasks( [
      ...allTasks,
      newItem
    ] )
    e.target.reset()
    setNewItem(
      {...newItem ,
        category: 'Code',
        text: ''
      }
    )
  }
  
  return (
    <form className="new-task-form" onSubmit={addToList}>
      <label>
        Details
        <input type="text" name="text" onChange={setNewText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={setNewCategory}>
          { categories.map((category)=>{
            return <option key={category} value={category}>{category}</option>
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
