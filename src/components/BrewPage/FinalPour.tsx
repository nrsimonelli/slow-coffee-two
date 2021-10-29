import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';

type Props = {
  target: number;
};

const Bloom = ({ target }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>Final Pour</TextTitle>
      <Text css={{ maxWidth: 400, textAlign: 'center' }}>
        For the best bloom try to wet all of the grounds without
        pouring water down the sides of the filter.
      </Text>
      <TextSub>Target: {target}g</TextSub>
    </Flex>
  );
};

export default Bloom;
