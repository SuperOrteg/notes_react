import { useState, useEffect } from "react";

const NavBar = ({ notes, onAddNote, activeNote, setActiveNote }) => {
	return (
		<div className="navbarSide">
		<div className="navbarTop">
			<button className="addBtn" onClick={onAddNote}>Ajouter une note</button>
		</div>
		<div className="navbarNotes">
			{notes.map((note) => (
				<div onClick={() => setActiveNote(note.id)} className={`note-card ${note.id === activeNote && "active"}`}>
					<span className="navTitle">{note.title}</span>
					<p className="navContent">{note.content && note.content.substr(0, 85) + "..."}</p>
				</div>
			))}
		</div>
		</div>
	);
};

export default NavBar;
