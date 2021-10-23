import React, { useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Flex } from '../Flex';
import SliderDemo from '../SliderDemo';
import { Div } from '../Div';
import { TextTitle, Text, TextSub } from '../Text';
import { MdCheck } from 'react-icons/md';

const BrewSetup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);

  const coffee = Math.ceil(sliderValue * 15);
  const water = Math.ceil((sliderValue * 225) / 50) * 50 + 100;

  const shouldDisableNext = sliderValue !== 0 ? false : true;

  const handleStepChange = () => {
    if (currentStep === 7) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const baseStyle = {
    pl: '$5',
    py: '$3',
    color: '$sideNav11',
    m: 0,
    '&:hover': {
      cursor: 'default',
      fontWeight: '$2',
      bg: '$sideNav4',
    },
  };

  const activeStyle = {
    pl: '$5',
    py: '$3',
    color: '$sideNav11',
    m: 0,
    fontWeight: '$2',
    bg: '$sideNav5',
    '&:hover': {
      cursor: 'default',
    },
  };

  const CheckIcon = () => {
    return (
      <Div
        css={{
          display: 'inline',
          ml: '$4',
          fontSize: '$4',
          lineHeight: 1,
          verticalAlign: 'middle',
        }}
      >
        <MdCheck />
      </Div>
    );
  };

  const sideNavText = (position: number, label: string) => {
    if (currentStep === position) {
      return (
        <Text
          onClick={() => {
            setCurrentStep(position);
          }}
          css={activeStyle}
        >
          {label}
        </Text>
      );
    }
    if (currentStep > position) {
      return (
        <Text
          onClick={() => {
            setCurrentStep(position);
          }}
          css={baseStyle}
        >
          {label} <CheckIcon />
        </Text>
      );
    }
    return (
      <Text
        onClick={() => {
          setCurrentStep(position);
        }}
        css={baseStyle}
      >
        {label}
      </Text>
    );
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
          bg: '$sideNav3',
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
              color: '$sideNav11',
            }}
          >
            Preparation
          </TextSub>
          {sideNavText(0, 'Volume')}
          {sideNavText(1, 'Materials')}
          {sideNavText(2, 'Setup')}

          <TextSub
            css={{
              mt: '$1',
              py: '$3',
              pl: '$4',
              color: '$sideNav11',
            }}
          >
            Brew
          </TextSub>
          {sideNavText(3, 'Bloom')}
          {sideNavText(4, 'First Pour')}
          {sideNavText(5, 'Second Pour')}
          {sideNavText(6, 'Final Pour')}
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
