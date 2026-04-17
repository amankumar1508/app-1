const express = require("express");
const router = express.Router();
const { createNote, bulkCreateNotes, getNotes, getNoteById, updateNote, patchNote } = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", bulkCreateNotes);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id", patchNote);

module.exports = router;
