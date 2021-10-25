import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '../Flex';
import { Text, TextSub, TextTitle } from '../Text';
import { Button } from '../Button';
import SliderDemo from '../SliderDemo';

type Props = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
};

const Volume = ({ value, setValue, handleNext }: Props) => {
  const shouldDisableNext = value === 0 ? true : false;

  return (
    <Flex
      border
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1', height: '100%' }}
    >
      <TextTitle>Brew Setup</TextTitle>
      <Text css={{ mx: 'auto' }}>
        How many cups will you be making?
      </Text>

      <SliderDemo volume={value} onSliderChange={setValue} />
      <TextSub css={{ mx: 'auto' }}>{value.toPrecision(2)}</TextSub>

      <Button
        color='primary'
        disabled={shouldDisableNext}
        onClick={handleNext}
        css={{ px: '$4', position: 'absolute', bottom: '$8' }}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Volume;
