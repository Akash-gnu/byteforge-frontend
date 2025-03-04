import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const showError = (setError, message) => {
    setError(message);
  };

  const hideError = (setError) => {
    setError("");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      hideError(setEmailError);
    } else {
      showError(setEmailError, "Please enter a valid email address");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length >= 8) {
      hideError(setPasswordError);
    } else {
      showError(setPasswordError, "Password must be at least 8 characters");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      showError(setEmailError, "Please enter a valid email address");
      isValid = false;
    } else {
      hideError(setEmailError);
    }

    if (password.length < 8) {
      showError(setPasswordError, "Password must be at least 8 characters");
      isValid = false;
    } else {
      hideError(setPasswordError);
    }

    if (isValid) {
      alert("Login successful! Redirecting...");
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <h1>ByteForge</h1>
      </div>
      <h2>Login to Your Account</h2>
      <form id="loginForm" noValidate onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength="8"
          />
          {passwordError && (
            <div className="error-message">{passwordError}</div>
          )}
        </div>
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
