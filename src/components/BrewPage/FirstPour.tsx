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
      css={{ flexGrow: '1' }}
    >
      <TextTitle>First Pour</TextTitle>
      <Text css={{ mx: 'auto', maxWidth: 400, wordWrap: 'normal' }}>
        Some tip about Coffee.
      </Text>
      <TextSub>Target: {target}g</TextSub>

      <Button
        color='primary'
        onClick={() => console.log('restart clicked')}
        css={{ px: '$4', position: 'absolute', bottom: '$8' }}
      >
        Restart
      </Button>
    </Flex>
  );
};

export default FirstPour;
