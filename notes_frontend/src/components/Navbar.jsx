import React from 'react';

// PUBLIC_INTERFACE
export default function Navbar({ onAdd }) {
  /** Top navigation with app title and Add button */
  return (
    <header className="navbar" role="banner" aria-label="Top navigation">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-logo" aria-hidden>📝</span>
          <h1 className="brand-title">Ocean Notes</h1>
        </div>
        <div className="navbar-actions">
          <button
            className="btn btn-primary"
            onClick={onAdd}
            aria-label="Create a new note"
          >
            + New Note
          </button>
        </div>
      </div>
    </header>
  );
}
