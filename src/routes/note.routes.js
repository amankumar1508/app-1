const express = require("express");
const router = express.Router();
const { createNote, bulkCreateNotes, getNotes, getNoteById, updateNote, patchNote, deleteNote, bulkDeleteNotes } = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", bulkCreateNotes);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id", patchNote);
router.delete("/bulk", bulkDeleteNotes);
router.delete("/:id", deleteNote);

module.exports = router;
