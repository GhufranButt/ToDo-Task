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

const CompletedTasks = ({
  removedItemsArray,
  // deleteTask,
  // deleteAllCompleted,
}) => {
  // console.log("opop", removedItemsArray);
  // console.log("8888", removedItem);

  useEffect(() => {
    localStorage.setItem(
      "removedItemsArray",
      JSON.stringify(removedItemsArray)
    );
  }, [removedItemsArray]);

  const [tasks, setTasks] = useState(() => {
    let savedTasks = localStorage.getItem("removedItemsArray");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const deleteTask = (index) => {
    if (tasks.length >= 0) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      console.log("nice", updatedTasks);
      setTasks(updatedTasks); // Update the state with the new array
      localStorage.setItem("removedItemsArray", JSON.stringify(updatedTasks)); // Store the updated tasks in localStorage
    }
  };

  const deleteAllCompleted = () => {
    setTasks([]);
    localStorage.setItem("removedItemsArray", JSON.stringify([]));
  };

  // const deleteAllCompleted = (indexToDelete) => {
  //   const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
  //   console.log("0-0-0-", updatedTasks);
  //   setTasks(updatedTasks);
  //   localStorage.setItem("removedItemsArray", JSON.stringify(updatedTasks));
  // };

  console.log("------->", tasks);

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
