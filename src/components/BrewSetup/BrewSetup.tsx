import React from 'react';
import { Flex } from '../Flex';
import SliderDemo from '../SliderDemo';
import { TextTitle, Text } from '../Text';

const BrewSetup = () => {
  return (
    <Flex direction='column' align='start' pad='4' border>
      <TextTitle>Brew Setup</TextTitle>
      <Text>Hello</Text>
      <Flex
        direction='column'
        align='center'
        border
        css={{ width: '$full' }}
      >
        <SliderDemo />
      </Flex>
    </Flex>
  );
};

export default BrewSetup;
