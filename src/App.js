import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import NotesKeeper from "./components/NotesKeeper/Note";
import ChatBot from "./components/Chatbot/ChatBot";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import "./style/global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/notes" element={<NotesKeeper />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
