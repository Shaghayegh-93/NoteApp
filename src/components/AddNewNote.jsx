import React, { useState } from "react";

const AddNewNote = ({ onAddNote }) => {
  // const [input, setInput] = useState({ noteTitel: "", noteDescriptions: "" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
      // createdAt: new Date().toLocaleDateString("en-UK", {
      //   day: "numeric",
      //   month: "long",
      //   year: "numeric",
      // }),
    };
    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form onSubmit={submitHandler} className="note-form">
        <input
          type="text"
          name="title"
          placeholder="note title..."
          className="text-field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="note description..."
          className="text-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn--primary btn" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
