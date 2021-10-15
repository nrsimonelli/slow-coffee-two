import React from 'react';

import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
    transition: 'all 200ms ease-in-out 0s',
    fontSize: '100%',
    lineHeight: '1',
    fontFamily: '$body',
  },
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
});

const App = () => {
  globalStyles();
  return <div>hello</div>;
};

export default App;
