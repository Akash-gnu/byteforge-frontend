import React from "react";
import "./styles/Navbar.css";
import lightlogo from "../../assets/img/ByteForge-logo.png";
import darklogo from "../../assets/img/ByteForge-logoindark.png";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={isDarkMode ? darklogo : lightlogo} alt="ByteForge Logo" />
      </div>
      <div className="search-container">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>
      <div className="nav-right">
        <a href="#" className="services-link">
          Services
        </a>
        <div className="auth-buttons">
          <button
            className="sign-up"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </button>
          <button
            className="log-in"
            onClick={() => (window.location.href = "/login")}
          >
            Log In
          </button>
          <label className="theme-toggle">
            <input
              type="checkbox"
              id="theme-switch"
              onChange={toggleTheme}
              checked={isDarkMode}
            />
            <div className="toggle-slider">
              <div className="toggle-knob">
                <div className="sun-icon">☀️</div>
                <div className="moon-icon">🌙</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
