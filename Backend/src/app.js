const express = require('express')
const noteModel = require('./models/notes.model')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("./public"))

/**
 * - POST /api/notes
 * - create new notes and store in database
 * - req.body = { title, description }
 */
app.post("/api/notes", async (req, res) => {
  const {title, description} = req.body;

  const note = await noteModel.create({
    title, description
  })

  res.status(201).json({
    Message: "Note created successfully.",
    note
  })
})

/**
 * - GET /api/notes
 * - fetch all notes from database
 */
app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find()

  res.status(200).json({
    Message: "Notes fetched successfully.",
    notes
  })
})

/**
 * - DELETE /api/notes/:id
 * - delete notes by id from req.params
 */
app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id)

  res.status(200).json({
    Message: "Note deleted successfully."
  })
})

/**
 * - UPDATE /api/notes/:id
 * - update notes by id from req.params
 * - req.body = { title, description }
 */
app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id
  const {title, description} = req.body;

  await noteModel.findByIdAndUpdate(id,{ title, description })

  res.status(200).json({
    Message: "Note updated successfully."
  })
})

app.use('*name',(req, res) => {
  res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;