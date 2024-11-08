// src/components/AddTask.jsx
import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  const handleEnterText = (e) => {
    if (e.keyCode === 13) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="add-task">
      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task here"
        onKeyDown={handleEnterText}
      ></textarea>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
