import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  // const [categories, setCategories] = useState(CATEGORIES);

  function handleDelete(key) {
    console.log("DELETING", key);
    setTasks(tasks.filter((task) => (task.text !== key)));
    //filter says to return an arr w tasks that does not = key
  } 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
