import React from 'react';

import { globalCss } from './stitches.config';
import { Container } from './components/Container';
import { Flex } from './components/Flex';
import {
  Text,
  TextHead,
  TextSub,
  TextTitle,
} from './components/Text';
import Nav from './components/Nav/Nav';

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
});

const App = () => {
  globalStyles();
  return (
    <>
      <Nav />
      <Container responsive screen>
        <Flex direction='column' pad='4'>
          <TextTitle>
            Brew{' '}
            <TextHead size='8' inline>
              Excellent
            </TextHead>{' '}
            Coffee
          </TextTitle>
          <TextHead case='initial'>What is in a cup anyway?</TextHead>
          <Text>
            Welcome to my Slow Coffee Rework. My first{' '}
            <TextSub inline>solo project</TextSub> as a JavaScript
            developer. A lot has changed since then, I'm excited to
            take you through it.
          </Text>

          <TextSub>Important but not too important</TextSub>
          <Text>
            In vehicula dolor ac quam dapibus vehicula. Nulla erat
            diam, ullamcorper vel dui et, luctus tincidunt nisi. Etiam
            ullamcorper neque et mauris pharetra, quis varius libero
            dictum. Integer et metus lobortis, consectetur nisi quis,
            efficitur urna. Nunc quis congue purus. Fusce massa leo,
            aliquet vitae euismod vitae, posuere in dolor. Curabitur
            ut quam magna. Suspendisse euismod libero sed viverra
            tristique. Curabitur ullamcorper commodo massa, et
            consectetur libero faucibus quis. Quisque tempor
            sollicitudin libero eget sollicitudin.
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default App;
