import { useEffect, useState } from 'react'
import { INote } from './assets/interfaces/INotes'
import NewNote from './assets/addNote'
import Note from './assets/notes'
import "./App.css"


function App() {

  const [storedNotes, setStoredNotes] = useState<INote[]>([])
  const [nextId, setNextId] = useState<number>(0)
  const [orderedNotes, setOrderedNotes] = useState<INote[][]>([])

  function saveNote(id: number, title: string, note: string): void {

    setStoredNotes(current => {
      const noteIndex = current.findIndex(e => e.id === id)

      if (noteIndex >= 0) {
        return current.map((e, index) =>
          index === noteIndex
            ? { ...e, title, note }
            : e
        );
      } else {
        const insertNote: INote = {
          "id": id,
          "title": title,
          "note": note
        }
        setNextId(e => e + 1)
        return [...current, insertNote]
      }
    })
  }

  function removeNote(id: number) {
    setStoredNotes(current => {
      const noteIndex = current.findIndex(e => e.id === id)
      return [...current.slice(0, noteIndex), ...current.slice(noteIndex + 1)]
    })
  }



  // INITIAL LOAD
  useEffect(() => {
    // Local Storage Notes Handle
    const getNotes = localStorage.getItem("notes")
    if (getNotes != null) {
      setStoredNotes(JSON.parse(getNotes) as INote[])
    }
    // Local Storage NextID Handle
    const getNextID = localStorage.getItem("nextID")
    if (getNextID != null) {
      setNextId(Number(getNextID))
    }

  }, [])

  // SAVE NOTES TO STORAGE ON CHANGE
  function saveToLocalNote() {
    localStorage.setItem("notes", JSON.stringify(storedNotes))
  }

  useEffect(() => {
    saveToLocalNote()
  }, [storedNotes])

  // SAVE NEXT ID TO STORAGE ON CHANGE
  useEffect(() => {
    localStorage.removeItem("nextID")
    localStorage.setItem("nextID", String(nextId))
  }, [nextId])

  // SET COLUMNS DEPENDING ON SCREEN SIZE
  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 280)
    let finalArr: INote[][] = []
    for(let i = 0 ; i< columns ; i++){
      finalArr.push([])
    }

    const sortedArr = storedNotes.sort((a, b) => a.id - b.id)
    const reversedArr = sortedArr.reverse()

    reversedArr.forEach((e, i) => {
      const colNumber = i % columns
      finalArr[colNumber].push(e)
    })
    setOrderedNotes([...finalArr])
  },[storedNotes])

  return (
    <>
      <h1>Local notes</h1>
      <section className='general-container'>
        <NewNote
          id={nextId}
          saveNote={saveNote}
        />

        <div className='note-container'>
          {orderedNotes.map((column, index) => {
            return (
              <div key={index} className='column-wrapper'>
                {column.map(e =>
                  <Note
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    note={e.note}
                    delete={removeNote}
                  />
                )}
              </div>
            )
          })}

        </div>
      </section>
    </>
  )
}

export default App
