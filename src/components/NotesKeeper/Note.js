import React, { useState } from "react";

const NotesKeeper = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = () => {
    setNotes([...notes, currentNote]);
    setCurrentNote("");
  };

  return (
    <div>
      <h2>Notes Keeper</h2>
      <textarea
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesKeeper;
