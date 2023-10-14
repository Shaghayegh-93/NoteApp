import React from "react";

const NoteList = ({ notes, onRemoveNote, onToggle, sortBy }) => {
  let sortedNote = notes;
  if (sortBy === "latest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "earliest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "completed")
    sortedNote = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="">
      <div className="note-list">
        {sortedNote.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onRemoveNote={onRemoveNote}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;

function NoteItem({ note, onRemoveNote, onToggle }) {
  const option = { day: "numeric", month: "short", year: "numeric" };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onRemoveNote(note.id)}>🗑</button>
          <input
            type="checkbox"
            checked={note.completed}
            value={note.id}
            onChange={onToggle}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-Uk", option)}
        {/* {note.createdAt} */}
      </div>
    </div>
  );
}
