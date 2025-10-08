//
// Ocean Professional Theme constants and helpers
//

// PUBLIC_INTERFACE
export const OceanTheme = {
  // Palette from style guide
  colors: {
    primary: '#2563EB',    // blue-600
    secondary: '#F59E0B',  // amber-500
    success: '#10B981',    // emerald-500 (used subtly)
    warning: '#F59E0B',
    error: '#EF4444',      // red-500
    background: '#f9fafb', // gray-50
    surface: '#ffffff',    // white
    text: '#111827',       // gray-900
    textMuted: '#6B7280',  // gray-500
    border: '#E5E7EB',     // gray-200
    focus: 'rgba(37, 99, 235, 0.35)'
  },
  // Shadows and radii
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.06)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 12px 28px rgba(0,0,0,0.12)',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    pill: '999px'
  },
  // Transitions
  transition: {
    fast: '150ms ease',
    base: '240ms ease',
    slow: '400ms ease'
  },
};

// PUBLIC_INTERFACE
export function applyThemeVars() {
  // Inject CSS variables into :root for easy usage inside CSS files
  const root = document.documentElement;
  const c = OceanTheme.colors;
  root.style.setProperty('--ocn-primary', c.primary);
  root.style.setProperty('--ocn-secondary', c.secondary);
  root.style.setProperty('--ocn-error', c.error);
  root.style.setProperty('--ocn-bg', c.background);
  root.style.setProperty('--ocn-surface', c.surface);
  root.style.setProperty('--ocn-text', c.text);
  root.style.setProperty('--ocn-text-muted', c.textMuted);
  root.style.setProperty('--ocn-border', c.border);
  root.style.setProperty('--ocn-focus', c.focus);

  const r = OceanTheme.radius;
  root.style.setProperty('--ocn-radius-sm', r.sm);
  root.style.setProperty('--ocn-radius-md', r.md);
  root.style.setProperty('--ocn-radius-lg', r.lg);
  root.style.setProperty('--ocn-radius-pill', r.pill);

  const s = OceanTheme.shadow;
  root.style.setProperty('--ocn-shadow-sm', s.sm);
  root.style.setProperty('--ocn-shadow-md', s.md);
  root.style.setProperty('--ocn-shadow-lg', s.lg);

  const t = OceanTheme.transition;
  root.style.setProperty('--ocn-trans-fast', t.fast);
  root.style.setProperty('--ocn-trans-base', t.base);
  root.style.setProperty('--ocn-trans-slow', t.slow);
}
