import { useState } from "react";
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const MarkdownInput = ({ activeNote, onUpdateNote }) => {

  const onChange = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
    })
  };

  if(!activeNote) return <div className="noNote">Pas de note sélectionnée</div>

  return (
    <>
      <div className="displayTop">
        <span className="navTitle">{activeNote.title}</span>
        <div className="dangerous mt-2" dangerouslySetInnerHTML={{ __html: `${converter.makeHtml(activeNote.content)}` }} />
      </div>
      <div className="displayBottom">
        <input value={activeNote.title} onChange={(e) => onChange('title', e.target.value)} />
        <textarea value={activeNote.content} onChange={(e) => onChange('content', e.target.value)} />
        </div>
    </>
  );
};

export default MarkdownInput;
