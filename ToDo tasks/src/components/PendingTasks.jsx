// import React, { useState } from "react";

// const PendingTasks = ({ tasks, toggleTaskCompletion, updateTask }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedText, setEditedText] = useState("");

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setEditedText(tasks[index].text);
//   };

//   const handleSaveClick = (index) => {
//     updateTask(index, editedText);
//     setEditingIndex(null);
//   };

//   console.log("->", tasks);

//   return (
//     <div className="pending-tasks">
//       <h2>Pending Tasks</h2>
//       <div>
//         {tasks
//           .filter((task) => !task.completed)
//           .map((task, index) => (
//             <div key={task.id || index}>
//               {" "}
//               {/* Use `task.id` if it exists, or `index` as a fallback */}
//               <li className="task-item">
//                 {editingIndex === index ? (
//                   <>
//                     <input
//                       type="text"
//                       value={editedText}
//                       onChange={(e) => setEditedText(e.target.value)}
//                     />
//                     <button
//                       className="save-btn"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEditClick(index)}
//                     >
//                       Edit
//                     </button>
//                     <span className="task-text">{task.text}</span>
//                     <button
//                       className="complete-btn"
//                       onClick={() => toggleTaskCompletion(tasks)}
//                     >
//                       Mark as Completed
//                     </button>
//                   </>
//                 )}
//               </li>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default PendingTasks;

// src/components/PendingTasks.jsx
import React, { useState } from "react";

const PendingTasks = ({ tasks, updateTask, getNextItem, removedItem }) => {
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
      {/* {removedItem && (
        <div className="removed-item">
          <p>Last removed item: {removedItem.text}</p>
        </div>
      )} */}
      <div>
        {tasks
          .filter((task) => !task.completed)
          .map((task, index) => (
            <div key={task.id || index}>
              <li className="task-item">
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
                    <button className="complete-btn" onClick={getNextItem}>
                      Mark as Completed
                    </button>
                  </>
                )}
              </li>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PendingTasks;
