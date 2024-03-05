import { useState } from "react"

/*
  Because we are now able to post directly to the database, 
  a lot of the props that we passed into this component 
  before are not needed.

  This component can now store all the new note data in state
  right here. It then sends the new data to the database.

  The only prop passed into this component now is for the 
  getNotes() function on the Home component.

  After we add a new note, we call getNotes so it will 
  re-fetch all Notes from the database. When it does so,
  all the notes in the ListNotes component are updated.

*/

export default function AddNote(props){
  
  const defaultForm = { title: "", body: "", priority: "0" }
  const [ newNote, setNewNote ] = useState(defaultForm)

  function handleInputChange(e){
    setNewNote({...newNote, [e.target.name]: e.target.value })
  }

  async function addNewNote(e){
    e.preventDefault()

    try {
      const query = await fetch("/api/note", {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await query.json()
      if( result.status === "success" ){
        // tell the Home component to re-fetch the notes
        props.getNotes()
      }
    } catch (err) {
      console.log(err.message)
    }

    // revert form back to its original state
    setNewNote(defaultForm)
  }

  return (
    <form onSubmit={addNewNote}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" name="title" id="title" className="form-control" value={newNote.title} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label>
        <textarea name="body" className="form-control" id="body" value={newNote.body} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="priority" className="form-label">Priority</label>
        <select name="priority" className="form-select" value={newNote.priority} onChange={handleInputChange}>
          <option value="0" hidden>Choose</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Save Note</button>
    </form>
  )
}