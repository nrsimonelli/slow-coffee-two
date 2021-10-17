import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextHead, TextSub } from '../Text';

const Home = () => {
  return (
    <Flex direction='column' align='start' pad='4'>
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
        developer. A lot has changed since then, I'm excited to take
        you through it.
      </Text>
      <TextSub>Important but not too important</TextSub>
      <Text>
        In vehicula dolor ac quam dapibus vehicula. Nulla erat diam,
        ullamcorper vel dui et, luctus tincidunt nisi. Etiam
        ullamcorper neque et mauris pharetra, quis varius libero
        dictum. Integer et metus lobortis, consectetur nisi quis,
        efficitur urna. Nunc quis congue purus. Fusce massa leo,
        aliquet vitae euismod vitae, posuere in dolor. Curabitur ut
        quam magna. Suspendisse euismod libero sed viverra tristique.
        Curabitur ullamcorper commodo massa, et consectetur libero
        faucibus quis. Quisque tempor sollicitudin libero eget
        sollicitudin.
      </Text>
    </Flex>
  );
};

export default Home;
