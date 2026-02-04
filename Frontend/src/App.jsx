import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([])

  function fatchNotes() {
    axios.get("http://localhost:3000/api/notes")
    .then(res => {
      setNotes(res.data.notes)
    })
  }

  useEffect(() => {
    fatchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const {title, description} = e.target.elements
    console.log(title.value, description.value)
    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
    .then(res => {
      fatchNotes()
    })
  }

  function deleteHandler(noteID) {
    axios.delete("http://localhost:3000/api/notes/" + noteID)
    .then(res => {
      fatchNotes()
    })
  }

  function editHandler(noteID) {
    const newTitle = prompt("Enter new title")
    const newDescription = prompt("Enter new description")

    axios.patch("http://localhost:3000/api/notes/" + noteID, {
      title: newTitle,
      description: newDescription
    })
    .then(res => {
      fatchNotes()
    })
  }

  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Description" name="description" />
      <button type="submit">Add Note</button>
    </form>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className='good'>
                <button onClick={() => {deleteHandler(note._id)}}>Delete</button>
                <button onClick={() => {editHandler(note._id)}}>Edit</button>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App