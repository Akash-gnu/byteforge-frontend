import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Byte</span>Forge
          </h1>
          <p>
            ByteForge is an online platform that offers coding tutorials,
            exercises, certificates, and services to help you learn and master
            coding.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; 123-456-789
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp;
            </span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/terms-of-service">
              <li>Terms of Service</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <br />
          <form action="index.html" method="post">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email address..."
            />
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; ByteForge | Designed by Group 5
      </div>
    </footer>
  );
};
export default Footer;
