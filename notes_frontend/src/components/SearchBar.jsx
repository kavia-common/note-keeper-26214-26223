import React from 'react';

// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange }) {
  /** Search input with icon and accessible label */
  return (
    <div className="searchbar">
      <label htmlFor="search" className="sr-only">Search notes</label>
      <div className="search-input-wrap">
        <span className="search-icon" aria-hidden>🔎</span>
        <input
          id="search"
          type="text"
          placeholder="Search by title or content..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search notes by title or content"
        />
      </div>
    </div>
  );
}
