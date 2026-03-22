const express = require('express');
const { readData, writeData } = require('../db');

const router = express.Router();

// GET /api/notes — return all notes, newest first
router.get('/', (req, res) => {
  const { notes } = readData();
  res.json([...notes].reverse());
});

// POST /api/notes — create a new note
router.post('/', (req, res) => {
  const { title, content, tag, priority } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'title and content are required' });
  }

  const validPriorities = ['casual', 'important', 'crucial'];
  const safePriority = validPriorities.includes(priority) ? priority : 'casual';
  const safeTag = typeof tag === 'string' ? tag : '';

  const data = readData();
  const now = new Date().toISOString();
  const note = {
    id: data.nextId++,
    title,
    content,
    tag: safeTag,
    priority: safePriority,
    created_at: now,
    updated_at: now,
  };

  data.notes.push(note);
  writeData(data);

  res.status(201).json(note);
});

// PUT /api/notes/:id — update a note
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, content, tag, priority } = req.body;

  const data = readData();
  const idx = data.notes.findIndex((n) => n.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }

  const validPriorities = ['casual', 'important', 'crucial'];
  const safePriority = validPriorities.includes(priority) ? priority : data.notes[idx].priority;

  data.notes[idx] = {
    ...data.notes[idx],
    title: title ?? data.notes[idx].title,
    content: content ?? data.notes[idx].content,
    tag: typeof tag === 'string' ? tag : data.notes[idx].tag,
    priority: safePriority,
    updated_at: new Date().toISOString(),
  };

  writeData(data);
  res.json(data.notes[idx]);
});

// DELETE /api/notes/:id — delete a note
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const data = readData();
  const idx = data.notes.findIndex((n) => n.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }

  data.notes.splice(idx, 1);
  writeData(data);

  res.status(204).end();
});

module.exports = router;

