import { useEffect, useRef, useState } from "react"
import AddNote from "./interfaces/IAddNote"
import { eventOnclick, eventText, eventTextArea } from "./types/types"
import "./addNote.css"


function NewNote (props: Readonly<AddNote> ){

    const [title,setTitle] = useState("")
    const [note, setNote] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    function handleTitle (event:eventText){
        setTitle(event.target.value)
    }

    function handleNote (event:eventTextArea){
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

    // HANDLE AUTOMATIC HEIGHT FOR THE TEXT AREA
    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }

    },[note])

    return(
        <form className="add-note-container">
            <input type="text" name="title" id="note-title" value={title} onChange={handleTitle} placeholder="Title"/>
            <textarea ref={textareaRef} name="note" id="note-text" value={note} onChange={handleNote} placeholder="Type your note here"/>
            <div className="save-wrapper">
            <button onClick={saveNote}>Save</button>
            </div>
        </form>

    )
}

export default NewNote