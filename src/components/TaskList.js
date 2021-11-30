import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (<Task text={task.text} category={task.category}/>))}
      {/* COMPONENTS MUST BE WRAPPED IN () */}
    </div>
  );
}

export default TaskList;
