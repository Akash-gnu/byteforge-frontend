import React, { useState } from "react";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className={`sidebar-toggle-btn ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Exercises</a>
            </li>
            <li>
              <a href="#">Certificates</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
