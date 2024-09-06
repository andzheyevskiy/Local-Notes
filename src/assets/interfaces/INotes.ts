import { deleteNote } from "../types/types";

export interface INote {
    id: number;
    title:string;
    note:string;
}

export interface NoteDisplay extends INote {
    delete: deleteNote
}