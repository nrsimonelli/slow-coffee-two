import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle } from '../Text';
import { Button } from '../Button';

type Props = {
  handleNext: () => void;
  buttonText?: string;
};

const Setup = ({ handleNext, buttonText }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
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

export default Setup;
