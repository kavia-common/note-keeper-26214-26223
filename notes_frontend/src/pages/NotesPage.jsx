import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import Modal from '../components/Modal';
import NoteEditor from '../components/NoteEditor';
import { createEmptyNote, deleteNote, loadNotes, searchNotes, upsertNote } from '../store/notesStore';

// PUBLIC_INTERFACE
export default function NotesPage() {
  /** Main page listing notes and managing editor and delete confirmation. */
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  const filtered = useMemo(() => searchNotes(notes, query), [notes, query]);

  const openCreate = () => {
    setEditing(createEmptyNote());
    setEditorOpen(true);
  };
  const openEdit = (note) => {
    setEditing(note);
    setEditorOpen(true);
  };
  const closeEditor = () => {
    setEditorOpen(false);
    setEditing(null);
  };
  const handleSave = (note) => {
    setNotes(prev => upsertNote(prev, note));
    closeEditor();
  };
  const requestDelete = (note) => setConfirmDelete(note);
  const cancelDelete = () => setConfirmDelete(null);
  const confirmDeleteNow = () => {
    setNotes(prev => deleteNote(prev, confirmDelete.id));
    setConfirmDelete(null);
  };

  return (
    <div className="page">
      <Navbar onAdd={openCreate} />
      <main className="container" role="main">
        <section className="controls">
          <SearchBar value={query} onChange={setQuery} />
        </section>

        {filtered.length === 0 ? (
          <section className="empty-state" role="status" aria-live="polite">
            <div className="empty-card">
              <h2>Welcome to Ocean Notes</h2>
              <p>Capture your thoughts and ideas. Create your first note to get started.</p>
              <button className="btn btn-primary" onClick={openCreate} aria-label="Create your first note">
                Create a Note
              </button>
            </div>
          </section>
        ) : (
          <section className="grid">
            {filtered.map(n => (
              <NoteCard key={n.id} note={n} onEdit={openEdit} onDelete={requestDelete} />
            ))}
          </section>
        )}
      </main>

      <Modal
        open={Boolean(confirmDelete)}
        title="Delete note?"
        onClose={cancelDelete}
        ariaLabelledById="confirm-delete-title"
      >
        <div>
          <p id="confirm-delete-title" className="mb-2">
            Are you sure you want to delete “{confirmDelete?.title || 'Untitled'}”?
          </p>
          <div className="modal-actions">
            <button className="btn" onClick={cancelDelete} aria-label="Cancel delete">Cancel</button>
            <button className="btn btn-danger" onClick={confirmDeleteNow} aria-label="Confirm delete">Delete</button>
          </div>
        </div>
      </Modal>

      <Modal
        open={editorOpen}
        title={editing?.id ? 'Edit Note' : 'New Note'}
        onClose={closeEditor}
        ariaLabelledById="editor-title"
      >
        <NoteEditor open={editorOpen} initialNote={editing} onCancel={closeEditor} onSave={handleSave} />
      </Modal>
    </div>
  );
}
