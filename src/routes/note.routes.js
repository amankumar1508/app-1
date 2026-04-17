const express = require("express");
const router = express.Router();
const { createNote, bulkCreateNotes, getNotes, getNoteById, updateNote, patchNote, deleteNote } = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", bulkCreateNotes);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id", patchNote);
router.delete("/:id", deleteNote);

module.exports = router;
