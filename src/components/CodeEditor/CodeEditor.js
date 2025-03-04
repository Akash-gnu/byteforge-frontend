import React from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = () => {
  const options = {
    selectOnLineNumbers: true,
    language: "java",
  };

  return (
    <MonacoEditor width="800" height="600" theme="vs-dark" options={options} />
  );
};

export default CodeEditor;
