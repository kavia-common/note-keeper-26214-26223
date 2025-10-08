import React, { useEffect } from 'react';
import './App.css';
import NotesPage from './pages/NotesPage';
import { applyThemeVars } from './theme';

// PUBLIC_INTERFACE
function App() {
  /** App entrypoint - applies theme and renders main NotesPage */
  useEffect(() => {
    applyThemeVars();
  }, []);

  return (
    <div className="App">
      <NotesPage />
    </div>
  );
}

export default App;
