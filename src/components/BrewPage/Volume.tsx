import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '../Flex';
import { Text, TextSub, TextTitle } from '../Text';
import Slider from '../Slider';

type Props = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const Volume = ({ value, setValue }: Props) => {
  return (
    <Flex
      border
      direction='column'
      align='center'
      pad='4'
      css={{ height: '50%' }}
    >
      <TextTitle>Volume</TextTitle>
      <Text css={{ mx: 'auto' }}>
        How many cups will you be making?
      </Text>

      <Slider volume={value} onSliderChange={setValue} />
      <TextSub css={{ mx: 'auto' }}>{value.toPrecision(2)}</TextSub>
    </Flex>
  );
};

export default Volume;
