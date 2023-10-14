import React from "react";
import Message from "./Message";

const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNote = notes.filter((note) => note.completed).length;
  const unCompleted = notes.filter((note) => !note.completed).length;
  if (!allNotes) return <Message >
    <p>No Notes</p>
  </Message>;
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNote}</span>
      </li>
      <li>
        Open <span>{unCompleted}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
