import { deleteNote, editNote, notesFunc } from "../types/types";

export interface INote {
    id: number;
    title:string;
    note:string;
}

export interface NoteDisplay extends INote {
    delete: deleteNote
    edit: editNote
}

export interface NoteEdit extends INote {
    save: notesFunc
}