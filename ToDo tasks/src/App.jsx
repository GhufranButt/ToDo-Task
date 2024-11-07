// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import AddTask from "./components/AddTask";
// import PendingTasks from "./components/PendingTasks";
// import CompletedTasks from "./components/CompletedTasks";
// import Tabs from "./components/Tabs";

// const App = () => {
//   const [tasks, setTasks] = useState(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });
//   // const [removedItem, setRemovedItem] = useState(null);

//   // const getNextItem = () => {
//   //   if (tasks.length > 0) {
//   //     const newItems = [...tasks];
//   //     const firstItem = newItems.shift();
//   //     setTasks(newItems);
//   //     setRemovedItem(firstItem);
//   //   }
//   // };

//   // console.log(updateTask);

//   const [activeTab, setActiveTab] = useState("add");
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task) =>
//     setTasks([...tasks, { text: task, completed: false }]);

//   // console.log("---->", tasks);

//   // const handleaddded = () => {

//   // }

//   // const toggleTaskCompletion = (tasks) => {
//   //   const updatedTasks = [];

//   //   for (let i = 0; i < tasks.length; i++) {
//   //     const task = tasks[i];
//   //     console.log("--->", task);
//   //     if (task) {
//   //       updatedTasks.push({
//   //         ...task,
//   //         completed: !task.completed,
//   //       });
//   //     } else {
//   //       updatedTasks.push(task);
//   //     }
//   //   }

//   //   setTasks(updatedTasks);
//   // };

//   const toggleTaskCompletion = (tasks) => {
//     const updatedTasks = tasks.map((task) => {
//       return task ? { ...task, completed: !task.completed } : task;
//     });

//     // console.log("--->", updatedTasks);
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
//   const deleteAllCompleted = () =>
//     setTasks(tasks.filter((task) => !task.completed));

//   // New function to update task text
//   const updateTask = (index, newText) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, text: newText } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="app">
//       <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
//       {activeTab === "add" && <AddTask addTask={addTask} />}
//       {activeTab === "pending" && (
//         <PendingTasks
//           tasks={tasks}
//           toggleTaskCompletion={toggleTaskCompletion}
//           updateTask={updateTask}
//         />
//       )}
//       {activeTab === "completed" && (
//         <CompletedTasks
//           tasks={tasks}
//           deleteTask={deleteTask}
//           deleteAllCompleted={deleteAllCompleted}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

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
  const [removedItem, setRemovedItem] = useState([]);

  const getNextItem = () => {
    // console.log("true", tasks);
    if (tasks.length > 0) {
      const newItems = [...tasks];
      // console.log("big Solutin", newItems);
      const firstItem = newItems.shift();
      setTasks(newItems);
      setRemovedItem(firstItem);
    }
  };

  const [removedItemsArray, setRemovedItemsArray] = useState([]);

  // Use useEffect to watch for changes in removedItem
  useEffect(() => {
    if (removedItem && removedItem.text) {
      setRemovedItemsArray((prevItem) => [...prevItem, removedItem]);
      // console.log("oooo", removedItem);
    }
  }, [removedItem]);
  // console.log("bigsolution", removedItem);

  const [activeTab, setActiveTab] = useState("add");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const addTask = (task) =>
  //   setTasks([...tasks, { text: task, completed: false }]);
  const addTask = (task) => setTasks([...tasks, { text: task }]);

  // const toggleTaskCompletion = (index) => {
  //   const updatedTasks = tasks.map((task, i) =>
  //     i === index ? { ...task, completed: !task.completed } : task
  //   );
  //   setTasks(updatedTasks);
  // };

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
          // toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask}
          getNextItem={getNextItem}
          removedItemsArray={removedItemsArray}
        />
      )}
      {activeTab === "completed" && (
        <CompletedTasks
          // tasks={tasks}
          removedItemsArray={removedItemsArray}
          // deleteTask={deleteTask}
          // deleteAllCompleted={deleteAllCompleted}
        />
      )}
    </div>
  );
};

export default App;
