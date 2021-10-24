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
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Coffee & Water</TextTitle>
      <Text css={{ mx: 'auto' }}>
        Heat at least {water}ml of water
      </Text>
      <Text css={{ mx: 'auto' }}>Grind {coffee}g of coffee</Text>
    </Flex>
  );
};

export default Materials;
