import React from 'react';
import { styled } from '../stitches.config';
import { Root, Indicator } from '@radix-ui/react-progress';

const StyledProgress = styled(Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$primary4',
  borderRadius: '$5',
  width: 300,
  height: 25,
});

const StyledIndicator = styled(Indicator, {
  bg: '$primary9',
  height: '100%',
  transition: 'width 10000ms ease-in',
});

export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

type Props = {
  barValue: number;
  timeValue: number;
};

const ProgressBar = ({ barValue, timeValue }: Props) => {
  return (
    <Progress value={100}>
      <ProgressIndicator
        style={{
          transition: `width ${timeValue}ms linear`,
          width: `${barValue}%`,
        }}
      />
    </Progress>
  );
};

export default ProgressBar;
