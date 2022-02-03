import { useState, useEffect } from "react";
import MarkdownInput from "./components/MarkdownInput";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [notes, setNotes] = useState(JSON.parse(localStorage.blocNotes) || []);
	const [activeNote, setActiveNote] = useState(false);

	useEffect(() => {
		localStorage.setItem("blocNotes", JSON.stringify(notes));
	}, [notes]);

	const onAddNote = () => {
		const newNote = {
			id: uuidv4(),
			title: "Untitled Note",
			content: "Content",
		};

		setNotes([newNote, ...notes]);
		setActiveNote(newNote);
	};

	const onUpdateNote = (noteToUpdate) => {
		const updatedNottesArray = notes.map((note) => {
			if(note.id === activeNote) {
				return noteToUpdate;
			}

			return note;
		});

		setNotes(updatedNottesArray);
	};

	const getActiveNote = () => {
		return notes.find((note) => note.id === activeNote)
	};

	return (
		<>
			<NavBar notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote} />
			<main>
				<MarkdownInput activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
			</main>
		</>
	);
};

export default App;
