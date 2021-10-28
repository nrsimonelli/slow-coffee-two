import React, { useState, useEffect } from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';
import { Button } from '../Button';

type Props = {
  target: number;
  handleNext: () => void;
};

const FirstPour = ({ target, handleNext }: Props) => {
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

      <Button
        color='primary'
        onClick={() => console.log('restart clicked')}
        css={{ px: '$4', position: 'absolute', bottom: '$6' }}
      >
        Restart
      </Button>
    </Flex>
  );
};

export default FirstPour;
