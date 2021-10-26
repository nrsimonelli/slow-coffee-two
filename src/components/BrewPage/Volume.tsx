import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '../Flex';
import { Text, TextSub, TextTitle } from '../Text';
import { Button } from '../Button';
import Slider from '../Slider';

type Props = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
  buttonText?: string;
};

const Volume = ({
  value,
  setValue,
  handleNext,
  buttonText,
}: Props) => {
  const shouldDisableNext = value === 0 ? true : false;

  return (
    <Flex
      border
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1', height: '100%' }}
    >
      <TextTitle>Volume</TextTitle>
      <Text css={{ mx: 'auto' }}>
        How many cups will you be making?
      </Text>

      <Slider volume={value} onSliderChange={setValue} />
      <TextSub css={{ mx: 'auto' }}>{value.toPrecision(2)}</TextSub>

      <Button
        color='primary'
        disabled={shouldDisableNext}
        onClick={handleNext}
        css={{ px: '$4', position: 'absolute', bottom: '$8' }}
      >
        {buttonText ? buttonText : 'Next'}
      </Button>
    </Flex>
  );
};

export default Volume;
