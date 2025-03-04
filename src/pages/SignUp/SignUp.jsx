import React, { useState } from "react";
// import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const updatePasswordStrength = (password) => {
    const strength = checkPasswordStrength(password);
    setPasswordStrength(strength);
  };

  const showError = (setError, message) => {
    setError(message);
  };

  const hideError = (setError) => {
    setError("");
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    if (value.trim() !== "") {
      hideError(setFirstNameError);
    } else {
      showError(setFirstNameError, "Required");
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    if (value.trim() !== "") {
      hideError(setLastNameError);
    } else {
      showError(setLastNameError, "Required");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      hideError(setEmailError);
    } else {
      showError(setEmailError, "Please enter a valid email");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    updatePasswordStrength(value);
    if (value.length >= 8) {
      hideError(setPasswordError);
    } else {
      showError(setPasswordError, "Minimum 8 characters");
    }
    if (confirmPassword && confirmPassword !== value) {
      showError(setConfirmPasswordError, "Passwords do not match");
    } else if (confirmPassword) {
      hideError(setConfirmPasswordError);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === password) {
      hideError(setConfirmPasswordError);
    } else {
      showError(setConfirmPasswordError, "Passwords do not match");
    }
  };

  const handleTermsChange = (e) => {
    setTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (firstName.trim() === "") {
      showError(setFirstNameError, "Required");
      isValid = false;
    } else {
      hideError(setFirstNameError);
    }

    if (lastName.trim() === "") {
      showError(setLastNameError, "Required");
      isValid = false;
    } else {
      hideError(setLastNameError);
    }

    if (!validateEmail(email)) {
      showError(setEmailError, "Please enter a valid email");
      isValid = false;
    } else {
      hideError(setEmailError);
    }

    if (password.length < 8) {
      showError(setPasswordError, "Minimum 8 characters");
      isValid = false;
    } else {
      hideError(setPasswordError);
    }

    if (confirmPassword !== password) {
      showError(setConfirmPasswordError, "Passwords do not match");
      isValid = false;
    } else {
      hideError(setConfirmPasswordError);
    }

    if (!terms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      isValid = false;
    }

    if (isValid) {
      alert("Account created successfully! Redirecting...");
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <h1>ByteForge</h1>
      </div>
      <h2>Create an Account</h2>
      <form id="signupForm" noValidate onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            {firstNameError && (
              <div className="error-message">{firstNameError}</div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
            {lastNameError && (
              <div className="error-message">{lastNameError}</div>
            )}
          </div>
        </div>
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
          <div className="password-strength">
            <div
              className={`password-strength-meter strength-${passwordStrength}`}
              id="passwordStrength"
            ></div>
          </div>
          {passwordError && (
            <div className="error-message">{passwordError}</div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {confirmPasswordError && (
            <div className="error-message">{confirmPasswordError}</div>
          )}
        </div>
        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={terms}
            onChange={handleTermsChange}
            required
          />
          <label htmlFor="terms">
            I agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
      <div className="login-link">
        Already have an account? <a href="/login">Log In</a>
      </div>
    </div>
  );
};

export default SignUp;
