import { create } from 'zustand';
import * as notesApi from '../services/notesApi';
import type { Note, NotePayload } from '../services/notesApi';

export type { Note };

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
  fetchNotes: () => Promise<void>;
  addNote: (payload: NotePayload) => Promise<void>;
  removeNote: (id: number) => Promise<void>;
  updateNote: (id: number, payload: Partial<NotePayload>) => Promise<void>;
}

export const useNotesStore = create<NotesState>((set, get) => ({
  notes: [],
  loading: false,
  error: null,

  fetchNotes: async () => {
    set({ loading: true, error: null });
    try {
      const notes = await notesApi.fetchNotes();
      set({ notes, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },

  addNote: async (payload) => {
    const note = await notesApi.createNote(payload);
    set({ notes: [note, ...get().notes] });
  },

  removeNote: async (id) => {
    await notesApi.deleteNote(id);
    set({ notes: get().notes.filter((n) => n.id !== id) });
  },

  updateNote: async (id, payload) => {
    const updated = await notesApi.updateNote(id, payload);
    set({ notes: get().notes.map((n) => (n.id === id ? updated : n)) });
  },
}));
