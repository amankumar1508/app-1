const express = require("express");
const router = express.Router();
const { createNote, bulkCreateNotes, getNotes, getNoteById } = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", bulkCreateNotes);
router.get("/", getNotes);
router.get("/:id", getNoteById);

module.exports = router;
