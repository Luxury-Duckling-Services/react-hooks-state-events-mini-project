import React from "react";

function CategoryFilter( { categories , setCategory }) {
  function changeCategory(e) {
    setCategory(e.target.innerText)
    Array.from(e.target.parentNode.children).forEach( (child)=>{
      child.className=''
    })
    e.target.className='selected'
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( (category) => {
        return <button onClick={changeCategory} key={category}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
