export type notesFunc = (id: number, title: string, note: string)=>void 
export type deleteNote = (id:number)=>void
export type eventText = React.ChangeEvent<HTMLInputElement>
export type eventTextArea = React.ChangeEvent<HTMLTextAreaElement>
export type eventOnclick = React.MouseEvent<HTMLButtonElement>