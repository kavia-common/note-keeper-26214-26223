import React from 'react';

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

// PUBLIC_INTERFACE
export default function NoteCard({ note, onEdit, onDelete }) {
  /** Card view of a note with title, preview, timestamp and actions */
  const preview = (note.body || '').length > 140 ? note.body.slice(0, 140) + '…' : note.body;

  return (
    <article className="note-card" role="article" aria-label={`Note ${note.title || 'untitled'}`}>
      <div className="note-card-header">
        <h2 className="note-title">{note.title || 'Untitled'}</h2>
        <time className="note-time" dateTime={note.updatedAt} aria-label="Last updated">
          {formatDate(note.updatedAt)}
        </time>
      </div>
      <p className="note-preview">{preview || 'No content yet.'}</p>
      <div className="note-card-actions">
        <button className="btn btn-secondary" onClick={() => onEdit(note)} aria-label={`Edit note ${note.title || 'untitled'}`}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(note)} aria-label={`Delete note ${note.title || 'untitled'}`}>
          Delete
        </button>
      </div>
    </article>
  );
}
