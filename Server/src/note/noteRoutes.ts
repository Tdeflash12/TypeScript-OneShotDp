import express from "express";
import { createNote, deleteNote, listNote, listNotes } from "./noteController";


const noteRoute= express.Router()
import { multer,storage } from "./../middleware/multerMiddlware"
const upload= multer({storage:storage})
noteRoute.route("/").post(upload.single('file'),createNote)
.get(listNote)
noteRoute.route("/:id")
.get(listNotes)
.delete(deleteNote)

export default noteRoute
