export const SCREENS = {
  1: '640px',
  2: '768px',
  3: '1024px',
  4: '1280px',
  5: '1536px',
} as const;

export const THEMES = {
  DEFAULT_THEME: 'default-theme',
  DARK_THEME: 'dark-theme',
} as const;

export const NAV_ROUTES = [
  { title: 'Home', location: '/' },
  { title: 'About', location: '/about' },
  { title: 'Support', location: '/support' },
] as const;
