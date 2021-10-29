import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';

type Props = {
  target: number;
};

const FirstPour = ({ target }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>First Pour</TextTitle>
      <Text css={{ maxWidth: 400, textAlign: 'center' }}>
        Some tip about Coffee.
      </Text>
      <TextSub>Target: {target}g</TextSub>
    </Flex>
  );
};

export default FirstPour;
