import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle } from '../Text';
import { Button } from '../Button';

type Props = {
  coffee: number;
  water: number;
  handleNext: () => void;
  buttonText?: string;
};

const Materials = ({
  coffee,
  water,
  handleNext,
  buttonText,
}: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Materials</TextTitle>
      <Text css={{ mx: 'auto' }}>
        Grind{' '}
        <Text color='hiContrast' inline>
          {coffee}g
        </Text>{' '}
        of coffee
      </Text>
      <Text css={{ mx: 'auto' }}>
        Heat at least{' '}
        <Text color='hiContrast' inline>
          {water}ml
        </Text>{' '}
        of water
      </Text>
      <Button
        color='primary'
        onClick={handleNext}
        css={{ px: '$4', position: 'absolute', bottom: '$8' }}
      >
        {buttonText ? buttonText : 'Next'}
      </Button>
    </Flex>
  );
};

export default Materials;
