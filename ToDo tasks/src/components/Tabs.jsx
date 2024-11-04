// src/components/Tabs.jsx
import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    <div className="tab-Tx">
      <button
        onClick={() => setActiveTab("add")}
        className={activeTab === "add" ? "active" : ""}
      >
        Add Task
      </button>
      <button
        onClick={() => setActiveTab("pending")}
        className={activeTab === "pending" ? "active" : ""}
      >
        Pending
      </button>
      <button
        onClick={() => setActiveTab("completed")}
        className={activeTab === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  </div>
);

export default Tabs;
