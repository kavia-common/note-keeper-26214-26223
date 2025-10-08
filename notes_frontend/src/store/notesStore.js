const STORAGE_KEY = 'notes_app_data_v1';

// PUBLIC_INTERFACE
export function loadNotes() {
  /** Load notes array from localStorage. Returns [] if none. */
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

// PUBLIC_INTERFACE
export function saveNotes(notes) {
  /** Persist notes array to localStorage. */
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    // swallow
  }
}

// PUBLIC_INTERFACE
export function createEmptyNote() {
  /** Returns a new empty note object with id and timestamps. */
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    title: '',
    body: '',
    createdAt: now,
    updatedAt: now,
  };
}

// PUBLIC_INTERFACE
export function upsertNote(notes, note) {
  /** Insert or update a note in the array, returns new array persisted. */
  const idx = notes.findIndex(n => n.id === note.id);
  const next = [...notes];
  const updated = { ...note, updatedAt: new Date().toISOString() };
  if (idx >= 0) {
    next[idx] = updated;
  } else {
    next.unshift(updated);
  }
  saveNotes(next);
  return next;
}

// PUBLIC_INTERFACE
export function deleteNote(notes, id) {
  /** Delete note by id, returns new persisted array. */
  const next = notes.filter(n => n.id !== id);
  saveNotes(next);
  return next;
}

// PUBLIC_INTERFACE
export function searchNotes(notes, query) {
  /** Case-insensitive search across title and body. */
  const q = (query || '').trim().toLowerCase();
  if (!q) return notes;
  return notes.filter(n => (n.title || '').toLowerCase().includes(q) || (n.body || '').toLowerCase().includes(q));
}
