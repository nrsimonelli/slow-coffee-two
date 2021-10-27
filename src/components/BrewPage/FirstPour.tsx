import React, { useState, useEffect } from 'react';
import { Flex } from '../Flex';
import { Text, TextTitle, TextSub } from '../Text';
import { Button } from '../Button';
import ProgressBar from '../ProgressBar';

type Props = {
  target: number;
  nextStep: () => void;
};

const FirstPour = ({ target, nextStep }: Props) => {
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(200);
  const [shouldReset, setShouldReset] = useState(false);

  const timerTest = setTimeout(() => console.log('hello'), 3000);

  useEffect(() => {
    setProgress(100);
    setTime(45000);
  }, [shouldReset]);

  const resetTimer = () => {
    setProgress(0);
    setTime(0);
    clearTimeout(timerTest);
    setShouldReset(!shouldReset);
  };

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
      <ProgressBar timeValue={time} barValue={progress} />

      <Button
        color='primary'
        onClick={resetTimer}
        css={{ px: '$4', position: 'absolute', bottom: '$8' }}
      >
        Restart
      </Button>
    </Flex>
  );
};

export default FirstPour;
