import React, { useEffect, useMemo, useState } from 'react';

const AUTOSAVE_KEY = 'notes_app_editor_draft';

// PUBLIC_INTERFACE
export default function NoteEditor({ open, initialNote, onCancel, onSave }) {
  /** Note editor with title and body fields. Autosaves draft when editing existing note. */
  const [title, setTitle] = useState(initialNote?.title || '');
  const [body, setBody] = useState(initialNote?.body || '');

  const isEditing = useMemo(() => Boolean(initialNote && initialNote.id), [initialNote]);

  useEffect(() => {
    setTitle(initialNote?.title || '');
    setBody(initialNote?.body || '');
  }, [initialNote]);

  // autosave only when editing to avoid clutter
  useEffect(() => {
    if (!isEditing) return;
    const data = { id: initialNote.id, title, body };
    try {
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [title, body, isEditing, initialNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...initialNote,
      title: title.trim(),
      body,
    };
    onSave?.(payload);
    try {
      localStorage.removeItem(AUTOSAVE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className={`editor ${open ? 'open' : ''}`} aria-hidden={!open}>
      <form className="editor-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="note-title">Title</label>
          <input
            id="note-title"
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="note-body">Body</label>
          <textarea
            id="note-body"
            placeholder="Start typing your note..."
            rows={8}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="editor-actions">
          <button type="button" className="btn" onClick={onCancel} aria-label="Cancel editing">Cancel</button>
          <button type="submit" className="btn btn-primary" aria-label="Save note">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
