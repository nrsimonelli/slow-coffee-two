import React, { useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Flex } from '../Flex';
import SliderDemo from '../SliderDemo';
import { TextTitle, Text, TextSub } from '../Text';

const BrewSetup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);

  const coffee = Math.ceil(sliderValue * 15);
  const water = Math.ceil((sliderValue * 225) / 50) * 50 + 100;

  const shouldDisableNext = sliderValue !== 0 ? false : true;

  const handleStepChange = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const baseStyle = {
    pl: '$5',
    py: '$3',
    color: '$primary11',
    m: 0,
    '&:hover': {
      cursor: 'default',
      fontWeight: '$2',
      bg: '$primary4',
    },
  };
  const activeStyle = {
    pl: '$5',
    py: '$3',
    color: '$primary11',
    m: 0,
    fontWeight: '$2',
    bg: '$primary5',
    '&:hover': {
      cursor: 'default',
    },
  };
  const completeStyle = {
    pl: '$4',
    color: '$primary11',
    '&:hover': { cursor: 'default', fontWeight: '$2' },
  };

  return (
    <Flex direction='row' align='start' css={{ width: '$full' }}>
      <Container
        css={{
          minWidth: 180,
          flex: '0 0 20%',
          p: '$1',
          pt: '$4',
          height: '$full',
          bg: '$primary3',
          display: 'none',
          '@bp2': { display: 'flex' },
        }}
      >
        <Flex direction='column' css={{ width: '$full' }}>
          <TextSub
            css={{
              pb: '$3',
              pl: '$4',
              mt: '$5',
              color: '$primary11',
            }}
          >
            Preparation
          </TextSub>
          <Text css={baseStyle}>Volume</Text>
          <Text css={baseStyle}>Materials</Text>
          <Text css={baseStyle}>Setup</Text>
          <TextSub
            css={{
              mt: '$1',
              py: '$3',
              pl: '$4',
              color: '$primary11',
            }}
          >
            Brew
          </TextSub>
          <Text css={baseStyle}>Bloom</Text>
          <Text css={activeStyle}>First Pour</Text>
          <Text css={baseStyle}>Second Pour</Text>
          <Text css={baseStyle}>Final Pour</Text>
        </Flex>
      </Container>
      <Flex
        direction='column'
        align='center'
        pad='4'
        css={{ flexGrow: '1' }}
      >
        {currentStep === 0 && (
          <>
            <TextTitle>Brew Setup</TextTitle>
            <Text css={{ mx: 'auto' }}>
              How many cups will you be making?
            </Text>

            <SliderDemo
              volume={sliderValue}
              onSliderChange={setSliderValue}
            />
            <TextSub css={{ mx: 'auto' }}>
              {sliderValue.toPrecision(2)}
            </TextSub>
          </>
        )}
        {currentStep === 1 && (
          <>
            <TextTitle>STEP 2 </TextTitle>
            <Text css={{ mx: 'auto' }}>
              Heat at least {water}ml of water
            </Text>
            <Text css={{ mx: 'auto' }}>
              Grind {coffee}g of coffee
            </Text>

            <SliderDemo
              volume={sliderValue}
              onSliderChange={setSliderValue}
            />
            <TextSub css={{ mx: 'auto' }}>
              {sliderValue.toPrecision(2)}
            </TextSub>
          </>
        )}
        {currentStep === 2 && (
          <>
            <TextTitle>STEP 3</TextTitle>
            <Text css={{ mx: 'auto' }}>
              How many cups will you be making?
            </Text>

            <SliderDemo
              volume={sliderValue}
              onSliderChange={setSliderValue}
            />
            <TextSub css={{ mx: 'auto' }}>
              {sliderValue.toPrecision(2)}
            </TextSub>
          </>
        )}
        <Button
          color='primary'
          disabled={shouldDisableNext}
          onClick={handleStepChange}
        >
          change step
        </Button>
      </Flex>
    </Flex>
  );
};

export default BrewSetup;
