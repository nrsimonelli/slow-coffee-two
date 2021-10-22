import React from 'react';
import { styled } from '../stitches.config';
import { Div } from './Div';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

const StyledSlider = styled(Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,

  '&[data-orientation="horizontal"]': {
    height: '$5',
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
});

const StyledTrack = styled(Track, {
  backgroundColor: '$base10',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

const StyledRange = styled(Range, {
  position: 'absolute',
  backgroundColor: '$base12',
  borderRadius: '9999px',
  height: '100%',
});

const StyledThumb = styled(Thumb, {
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: '$base12',
  boxShadow: '0 2px 10px $colors$base7',
  borderRadius: 10,
  '&:hover': { backgroundColor: '' },
  '&:focus': { boxShadow: '0 0 0 5px $colors$base8' },
});

export type Props = {
  volume: number;
  onSliderChange: (c: number) => void;
};

const SliderDemo = ({ volume, onSliderChange }: Props) => {
  return (
    <Div css={{ mx: 'auto', my: '$4' }}>
      <StyledSlider
        value={[volume]}
        max={6}
        min={1}
        step={0.1}
        aria-label='Volume'
        onValueChange={(e) => onSliderChange(e[0])}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
      </StyledSlider>
    </Div>
  );
};

export default SliderDemo;
