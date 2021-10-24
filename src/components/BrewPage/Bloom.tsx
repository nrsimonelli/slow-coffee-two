import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle } from '../Text';

const Bloom = () => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Final Setup</TextTitle>
      <Text css={{ mx: 'auto' }}>
        Wet the filter, place the grinds, zero the scale
      </Text>{' '}
    </Flex>
  );
};

export default Bloom;
