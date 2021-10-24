import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '../Flex';
import { Text, TextSub, TextTitle } from '../Text';
import SliderDemo from '../SliderDemo';

type Props = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const Volume = ({ value, setValue }: Props) => {
  return (
    <Flex
      direction='column'
      align='center'
      pad='4'
      css={{ flexGrow: '1' }}
    >
      <TextTitle>Brew Setup</TextTitle>
      <Text css={{ mx: 'auto' }}>
        How many cups will you be making?
      </Text>

      <SliderDemo volume={value} onSliderChange={setValue} />
      <TextSub css={{ mx: 'auto' }}>{value.toPrecision(2)}</TextSub>
    </Flex>
  );
};

export default Volume;
