import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle } from '../Text';

const EndScreen = () => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>Enjoy!</TextTitle>
      <Text css={{ maxWidth: 400, textAlign: 'center' }}>
        Coffee is best when shared with others
      </Text>
    </Flex>
  );
};

export default EndScreen;
