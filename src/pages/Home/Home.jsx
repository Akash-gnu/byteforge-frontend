import React from "react";
import "./Home.css";
import Navbar from "D:/Akash/PROJECT/ByteForge/byteforge-frontend/src/components/Shared/Navbar.jsx";
import Header from "D:/Akash/PROJECT/ByteForge/byteforge-frontend/src/components/Shared/Header";
import Footer from "D:/Akash/PROJECT/ByteForge/byteforge-frontend/src/components/Shared/Footer";
import Sidebar from "D:/Akash/PROJECT/ByteForge/byteforge-frontend/src/components/Shared/Sidebar";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  };

  return (
    <div className="home">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <h2>Home Page</h2>
          <h2>Home Page</h2>
          <p>
            Welcome to ByteForge! This is a platform where you can learn to
            code, practice coding, and earn certificates. We offer a variety of
            services to help you on your coding journey. Sign up today to get
            started!
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
