import { NoteDisplay } from "./interfaces/INotes"
import "./notes.css"

function Note(props: Readonly<NoteDisplay>) {

    function removeNote(){
        props.delete(props.id)
    }

    function editNote(){
        props.edit(props.id)
    }


    return (
        <div id={`${props.id}`} className="note-wrapper">
            <h3 onClick={editNote}>{props.title}</h3>
            <p onClick={editNote}>{props.note}</p>
            <div className="button-wrapper">
            <button onClick={removeNote}><img src="./assets/icons/trashcan.png" alt="Delete" /></button>
            </div>
        </div>
    )

}

export default Note