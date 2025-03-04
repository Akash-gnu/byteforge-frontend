import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const executeJavaCode = async (code) => {
  const response = await axios.post(`${API_URL}/execute`, { code });
  return response.data;
};

export const saveNote = async (note) => {
  const response = await axios.post(`${API_URL}/notes`, { note });
  return response.data;
};

export const getNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response.data;
};

// Add more API calls as needed
