import NewNote from "./addNote";
import { NoteEdit } from "./interfaces/INotes";
import "./editNote.css"

function EditNote(props: Readonly<NoteEdit>) {

    function exitWithoutSave() {
        props.save(props.id, props.title, props.note)
    }


    return (
        <>
            <div onClick={exitWithoutSave} className="exit-edit" />
            <div className="edit-container">
                <NewNote
                    id={props.id}
                    title={props.title}
                    note={props.note}
                    save={props.save}
                />
            </div>
        </>

    )
}

export default EditNote