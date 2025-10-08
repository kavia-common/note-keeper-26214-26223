import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
export default function Modal({ open, title, children, onClose, ariaLabelledById }) {
  /** Accessible modal with backdrop and ESC to close */
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledById || 'modal-title'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 id={ariaLabelledById || 'modal-title'} className="modal-title">{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
