import React, { useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Flex } from '../Flex';
import SliderDemo from '../SliderDemo';
import { TextTitle, Text, TextSub } from '../Text';

const BrewSetup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);

  const handleStepChange = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Flex
      direction='row'
      align='start'
      pad='4'
      border
      css={{ width: '$full' }}
    >
      <Container
        border
        css={{
          width: '$8',
          p: '$1',
          height: '$full',
          display: 'none',
          '@bp2': { display: 'flex' },
        }}
      >
        yo sidebar
      </Container>
      <Flex
        direction='column'
        align='center'
        pad='4'
        border
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
        <Button color='primary' onClick={handleStepChange}>
          change step
        </Button>
      </Flex>
    </Flex>
  );
};

export default BrewSetup;
