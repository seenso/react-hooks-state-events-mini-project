import React from "react";

function Task({ category, text, handleDelete, key }) {


  return (
    <div className="task" key={key}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => {handleDelete(text)}}>X</button>
    </div>
  );
}

export default Task;
