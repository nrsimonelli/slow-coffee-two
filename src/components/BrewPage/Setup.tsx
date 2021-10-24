import React from 'react';
import { Flex } from '../Flex';
import { Text, TextSub, TextTitle } from '../Text';

type Props = {
  value: number;
};

const Setup = ({ value }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Brew Setup</TextTitle>
      <Text css={{ mx: 'auto' }}>
        How many cups will you be making?
      </Text>

      <TextSub css={{ mx: 'auto' }}>{value.toPrecision(2)}</TextSub>
    </Flex>
  );
};

export default Setup;
