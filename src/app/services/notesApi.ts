const API_BASE = 'http://localhost:3001/api/notes';

export interface NotePayload {
  title: string;
  content: string;
  tag: string;
  priority: 'casual' | 'important' | 'crucial';
}

export interface Note extends NotePayload {
  id: number;
  created_at: string;
  updated_at: string;
}

export async function fetchNotes(): Promise<Note[]> {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch notes');
  return res.json();
}

export async function createNote(payload: NotePayload): Promise<Note> {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create note');
  return res.json();
}

export async function updateNote(id: number, payload: Partial<NotePayload>): Promise<Note> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update note');
  return res.json();
}

export async function deleteNote(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete note');
}
