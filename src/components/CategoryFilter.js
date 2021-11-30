import React from "react";

function CategoryFilter({ categories, selected, handleSelected }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button key={category} className={selected ? "selected" : "" }
          onClick={() => {handleSelected()}}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
