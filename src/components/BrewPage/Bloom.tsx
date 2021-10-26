import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';
import { Button } from '../Button';

type Props = {
  value: number;
  handleBrewTime: () => void;
  buttonText?: string;
};

const Bloom = ({ value, handleBrewTime, buttonText }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Bloom</TextTitle>
      <Text css={{ mx: 'auto', maxWidth: 400, wordWrap: 'normal' }}>
        For the best bloom, try a slow circular pour from the center
        of the grounds. Be careful to avoid the edges of the filter.
      </Text>
      <TextSub>Target: {value * 2}g</TextSub>
      <Button
        color='primary'
        onClick={handleBrewTime}
        css={{ px: '$4', position: 'absolute', bottom: '$8' }}
      >
        {buttonText ? buttonText : 'Next'}
      </Button>
    </Flex>
  );
};

export default Bloom;
