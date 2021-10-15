import React from 'react';

import { globalCss, styled } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
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
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const Text = styled('p', {
  lineHeight: '$1',
  fontWeight: '$1',
});
const TextHead = styled('p', {
  fontSize: '$6',
  lineHeight: '$2',
  fontWeight: '$2',
});

const Flex = styled('div', {
  mx: 'auto',
  maxWidth: '400px',
});

const App = () => {
  globalStyles();
  return (
    <Container>
      <TextHead>hello</TextHead>
      <Flex>
        <Text>
          Welcome to my Slow Coffee Rework. My first solo project as a
          JavaScript developer. A lot has changed since then, I'm
          excited to take you through it.
        </Text>
      </Flex>
    </Container>
  );
};

export default App;
