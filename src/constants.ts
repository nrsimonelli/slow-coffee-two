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

export const ROUTES = {
  HOME: {
    PATH: '/',
    NAME: 'Home',
  },
  ABOUT: {
    PATH: '/about',
    NAME: 'About',
  },
  SUPPORT: {
    PATH: '/support',
    NAME: 'Support',
  },
  BREW: {
    PATH: '/setup',
    NAME: 'Brew',
  },
} as const;

export const NAV_ROUTES = [
  { title: ROUTES.HOME.NAME, location: ROUTES.HOME.PATH },
  { title: ROUTES.ABOUT.NAME, location: ROUTES.ABOUT.PATH },
  { title: ROUTES.SUPPORT.NAME, location: ROUTES.SUPPORT.PATH },
  { title: ROUTES.BREW.NAME, location: ROUTES.BREW.PATH },
] as const;
