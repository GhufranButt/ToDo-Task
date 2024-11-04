import React from "react";

const CompletedTasks = ({ tasks, deleteTask, deleteAllCompleted }) => (
  <div className="completed-tasks">
    <h2>Completed Tasks</h2>
    <ul>
      {tasks
        .filter((task) => task.completed)
        .map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>
            <button
              className="completed-deleted"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
    <button className="completed-deletedAll" onClick={deleteAllCompleted}>
      Delete All Completed
    </button>
  </div>
);

export default CompletedTasks;
