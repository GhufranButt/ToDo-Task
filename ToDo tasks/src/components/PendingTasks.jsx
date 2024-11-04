// src/components/PendingTasks.jsx
import React, { useState } from "react";
// import "./PendingTasks.css";

const PendingTasks = ({ tasks, toggleTaskCompletion, updateTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedText(tasks[index].text);
  };

  const handleSaveClick = (index) => {
    updateTask(index, editedText);
    setEditingIndex(null);
  };

  return (
    <div className="pending-tasks">
      <h2>Pending Tasks</h2>
      <div>
        {/* <div>
          <button>Edit</button>
        </div> */}
        <div>
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <div>
                <li key={index} className="task-item">
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                      <button
                        className="save-btn"
                        onClick={() => handleSaveClick(index)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                      <span className="task-text">{task.text}</span>
                      <button
                        className="complete-btn"
                        onClick={() => toggleTaskCompletion(index)}
                      >
                        Mark as Completed
                      </button>
                    </>
                  )}
                </li>
              </div>
            ))}
        </div>
        {/* <div>
          <button>CompleteTask</button>
        </div> */}
      </div>
    </div>
  );
};

export default PendingTasks;
