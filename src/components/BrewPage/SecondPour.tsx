import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';
import { Button } from '../Button';

type Props = {
  target: number;
  handleNext: () => void;
  buttonText?: string;
};

const Bloom = ({ target, handleNext, buttonText }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>Second Pour</TextTitle>
      <Text css={{ maxWidth: 400, textAlign: 'center' }}>
        For the best bloom try to wet all of the grounds without
        pouring water down the sides of the filter.
      </Text>
      <TextSub>Target: {target}g</TextSub>
      <Button
        color='primary'
        onClick={handleNext}
        css={{ px: '$4', position: 'absolute', bottom: '$6' }}
      >
        {buttonText ? buttonText : 'Next'}
      </Button>
    </Flex>
  );
};

export default Bloom;
