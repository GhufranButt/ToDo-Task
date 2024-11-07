// import React from "react";

// const CompletedTasks = ({
//   tasks,
//   removedItem,
//   deleteTask,
//   deleteAllCompleted,
// }) => (
//   <div className="completed-tasks">
//     <h2>Completed Tasks</h2>
//     <ul>
//       {tasks
//         .filter((task) => task.completed)
//         .map((task, index) => (
//           <li key={index}>
//             <span>{task.text}</span>
//             <button
//               className="completed-deleted"
//               onClick={() => deleteTask(index)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//     </ul>
//     <button className="completed-deletedAll" onClick={deleteAllCompleted}>
//       Delete All Completed
//     </button>
//   </div>
// );

// export default CompletedTasks;

import React, { useState, useEffect } from "react";

const CompletedTasks = ({ removedItemsArray }) => {
  // Use localStorage to store `removedItemsArray` directly with `useState`
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("removedItemsArray");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Sync `removedItemsArray` with `tasks` in local state
  const [localRemovedItems, setLocalRemovedItems] = useState(() => {
    return removedItemsArray ? removedItemsArray : [];
  });

  // Update tasks and sync with localStorage whenever `removedItemsArray` changes
  useEffect(() => {
    setTasks(localRemovedItems);
    localStorage.setItem(
      "removedItemsArray",
      JSON.stringify(localRemovedItems)
    );
  }, [localRemovedItems]);

  const deleteTask = (index) => {
    if (tasks.length > 0) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      setLocalRemovedItems(updatedTasks);
      localStorage.setItem("removedItemsArray", JSON.stringify(updatedTasks));
    }
  };

  const deleteAllCompleted = () => {
    setTasks([]);
    setLocalRemovedItems([]);
    localStorage.setItem("removedItemsArray", JSON.stringify([]));
  };

  return (
    <div className="completed-tasks">
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.length !== 0
          ? tasks.map((item, index) => (
              <li key={index}>
                <span>{item.text}</span>
                <button
                  className="completed-deleted"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))
          : ""}
      </ul>

      {tasks.length !== 0 ? (
        <button className="completed-deletedAll" onClick={deleteAllCompleted}>
          Delete All Completed
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompletedTasks;
