import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle } from '../Text';

const Setup = () => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>Setup</TextTitle>
      <Text css={{ mx: 'auto' }}>
        Wet the{' '}
        <Text color='hiContrast' inline>
          filter,
        </Text>{' '}
        set the{' '}
        <Text color='hiContrast' inline>
          grounds,
        </Text>{' '}
        zero the{' '}
        <Text color='hiContrast' inline>
          scale
        </Text>
      </Text>
    </Flex>
  );
};

export default Setup;
