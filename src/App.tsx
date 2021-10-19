import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { globalCss } from './stitches.config';
import { Container } from './components/Container';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Support from './components/Support/Support';

const globalStyles = globalCss({
  '*': {
    transition: 'all 200ms ease-out 0s',
  },
  html: {
    scrollBehavior: 'smooth',
    fontFamily: '$body',
    lineHeight: '1',
    fontWeight: '$1',
  },
  body: {
    margin: 0,
    minHeight: '100vh',
    bg: '$appBg1',
    color: '$hiContrast',
  },
  a: {
    color: '$lowContrast',
    fontWeight: '$2',
    textDecoration: 'inherit',
    textDecorationLine: 'none',
    px: '$4',
    py: '$2',
    borderRadius: '$2',
  },
  'a:hover': {
    color: '$hiContrast',
    bg: '$base5',
  },
});

const App = () => {
  globalStyles();

  return (
    <>
      <Nav />
      <Container
        responsive
        css={{ minHeight: 'calc(100vh - $sizes$6)' }}
      >
        <Switch>
          <Route path='/about' exact component={About} />
          <Route path='/support' exact component={Support} />
          <Route path='/' exact component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </Container>
    </>
  );
};

export default App;
