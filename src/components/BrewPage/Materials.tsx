import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';

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
      <TextTitle>Preparation</TextTitle>
      <Text css={{ mx: 'auto' }}>
        Grind {coffee}g of <TextSub inline>coffee</TextSub>
      </Text>
      <Text css={{ mx: 'auto' }}>
        Heat at least {water}ml of <TextSub inline>water</TextSub>
      </Text>
    </Flex>
  );
};

export default Materials;
