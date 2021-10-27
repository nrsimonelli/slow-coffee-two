import React from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';
import { Button } from '../Button';

type Props = {
  target: number;
  handleBrewTime: () => void;
  buttonText?: string;
};

const Bloom = ({ target, handleBrewTime, buttonText }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Bloom</TextTitle>
      <Text css={{ mx: 'auto', maxWidth: 400, wordWrap: 'normal' }}>
        For the best bloom try to wet all of the grounds without
        pouring water down the sides of the filter.
      </Text>
      <TextSub>Target: {target}g</TextSub>
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
