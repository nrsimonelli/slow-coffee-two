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
    color: 'inherit',
    textDecoration: 'inherit',
    textDecorationLine: 'none',
    lineHeight: 'inherit',
    py: '$3',
    px: '$3',
    mx: '$2',
    borderRadius: '$2',
  },
  'a:hover': {
    background: '$ghost2',
    textShadow: '0px 0px 1px $colors$hiContrast',
  },
});

const App = () => {
  globalStyles();

  return (
    <>
      <Nav />
      <Container responsive screen>
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
