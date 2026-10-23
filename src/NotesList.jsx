import React from "react";
import Note from "./Note.jsx";

const NotesList = () => (
  <ul className="notes-list">
    <Note />
    <Note />
    <Note />
  </ul>
);

export default NotesList;