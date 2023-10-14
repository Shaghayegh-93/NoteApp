import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const addNoteHandler = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const removeHandler = (id) => {
    let newNoteList = notes.filter((note) => note.id !== id);
    setNotes(newNoteList);
  };
  const toggleHandler = (e) => {
    const noteId = Number(e.target.value);
    const newNoteList = notes.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note
    );
    setNotes(newNoteList);
  };

  return (
    <div className="container">
      <Header
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />

      <div className="note-app">
        <AddNewNote onAddNote={addNoteHandler} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onRemoveNote={removeHandler}
            onToggle={toggleHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
