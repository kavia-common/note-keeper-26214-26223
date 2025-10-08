# Ocean Notes - Frontend

A modern, responsive notes app UI built with React, following the Ocean Professional theme (blue and amber accents) with clean cards, subtle shadows, rounded corners, and smooth transitions.

## Features

- Create, edit, and delete notes
- Persist notes to localStorage (key: `notes_app_data_v1`)
- Search/filter by title and content
- Confirm delete modal
- Responsive layout with accessible controls and ARIA labels
- Smooth transitions on hover/focus and modal open
- No backend calls (frontend only)

## Getting Started

In the project directory, run:

### `npm start`
Runs the app in development mode.  
Open http://localhost:3000 to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Structure

- `src/theme.js` Theme constants and helper to apply CSS variables
- `src/ocean.css` Ocean Professional theme styles
- `src/store/notesStore.js` LocalStorage-based store for notes
- `src/components/*` Navbar, SearchBar, NoteCard, Modal, NoteEditor
- `src/pages/NotesPage.jsx` Notes page combining list, search, editor, and modals

## Accessibility
- Buttons and inputs include descriptive aria-labels
- Modal traps attention visually and supports ESC to close
- Color contrast follows accessible palette

## Environment
No environment variables are required for the frontend.
