import { NoteDisplay } from "./interfaces/INotes"


function Note(props: Readonly<NoteDisplay>) {

    function removeNote(){
        props.delete(props.id)
    }


    return (
        <div id={`${props.id}`} className="note-wrapper">
            <h2>{props.title}</h2>
            <p>{props.note}</p>
            <button onClick={removeNote}><img src="./assets/icons/trashcan.png" alt="Delete" /></button>
        </div>
    )

}

export default Note