import { useState } from "react"
import AddNote from "./interfaces/IAddNote"
import { eventOnclick, eventText } from "./types/types"
import "./addNote.css"


function NewNote (props: Readonly<AddNote> ){

    const [title,setTitle] = useState("")
    const [note, setNote] = useState("")

    function handleTitle (event:eventText){
        setTitle(event.target.value)
    }

    function handleNote (event:eventText){
        setNote(event.target.value)
    }

    function saveNote (event:eventOnclick) {
        event.preventDefault()
        props.saveNote(
            props.id,
            title,
            note
        )
        setTitle("")
        setNote("")
    }

    return(
        <form className="add-note-container">
            <input type="text" name="title" id="note-title" value={title} onChange={handleTitle} placeholder="Title"/>
            <input type="text" name="note" id="note-text" value={note} onChange={handleNote} placeholder="Type your note here"/>
            <div className="save-wrapper">
            <button onClick={saveNote}>Save</button>
            </div>
        </form>

    )
}

export default NewNote