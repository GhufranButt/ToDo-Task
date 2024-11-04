// src/App.jsx
import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import PendingTasks from "./components/PendingTasks";
import CompletedTasks from "./components/CompletedTasks";
import Tabs from "./components/Tabs";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [activeTab, setActiveTab] = useState("add");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) =>
    setTasks([...tasks, { text: task, completed: false }]);

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const deleteAllCompleted = () =>
    setTasks(tasks.filter((task) => !task.completed));

  // New function to update task text
  const updateTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "add" && <AddTask addTask={addTask} />}
      {activeTab === "pending" && (
        <PendingTasks
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask} // Pass updateTask function
        />
      )}
      {activeTab === "completed" && (
        <CompletedTasks
          tasks={tasks}
          deleteTask={deleteTask}
          deleteAllCompleted={deleteAllCompleted}
        />
      )}
    </div>
  );
};

export default App;
