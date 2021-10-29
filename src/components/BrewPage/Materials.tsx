import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle } from '../Text';

type Props = {
  coffee: number;
  water: number;
};

const Materials = ({ coffee, water }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>Materials</TextTitle>
      <Text css={{ mx: 'auto' }}>
        Grind{' '}
        <Text color='hiContrast' inline>
          {coffee}g
        </Text>{' '}
        of coffee
      </Text>
      <Text css={{ mx: 'auto' }}>
        Heat at least{' '}
        <Text color='hiContrast' inline>
          {water}ml
        </Text>{' '}
        of water
      </Text>
    </Flex>
  );
};

export default Materials;
