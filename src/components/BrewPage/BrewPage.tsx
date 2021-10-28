import React, { useState } from 'react';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Div } from '../Div';
import { Text, TextSub } from '../Text';
import { MdCheck } from 'react-icons/md';
import Volume from './Volume';
import Materials from './Materials';
import Setup from './Setup';
import Bloom from './Bloom';
import FirstPour from './FirstPour';
import SecondPour from './SecondPour';

const BrewPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);

  const coffee = Math.ceil(sliderValue * 15);
  const water = Math.ceil((sliderValue * 225) / 50) * 50 + 100;

  const TARGETS = {
    BLOOM: coffee * 2,
    FIRST: coffee * 6,
    SECOND: coffee * 11,
    FINAL: coffee * 15,
  };

  // const shouldDisableNext = sliderValue !== 0 ? false : true;

  const handleStepChange = () => {
    if (currentStep === 7) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderBrewStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Volume
            value={sliderValue}
            setValue={setSliderValue}
            handleNext={handleStepChange}
          />
        );
      case 1:
        return (
          <Materials
            coffee={coffee}
            water={water}
            handleNext={handleStepChange}
            buttonText={'Ready'}
          />
        );
      case 2:
        return (
          <Setup handleNext={handleStepChange} buttonText={'Done'} />
        );
      case 3:
        return (
          <Bloom
            target={TARGETS.BLOOM}
            handleNext={handleStepChange}
            buttonText={'Go!'}
          />
        );
      case 4:
        return (
          <FirstPour
            target={TARGETS.FIRST}
            nextStep={handleStepChange}
          />
        );
      case 5:
        return (
          <SecondPour
            target={TARGETS.SECOND}
            handleBrewTime={handleStepChange}
          />
        );
      default:
        return (
          <Volume
            value={sliderValue}
            setValue={setSliderValue}
            handleNext={handleStepChange}
          />
        );
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
    <Flex
      direction='row'
      align='start'
      wrap='wrap'
      css={{ width: '$full' }}
    >
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
          {/* <Button
            color='primary'
            disabled={shouldDisableNext}
            onClick={handleStepChange}
            css={{ px: '$4' }}
          >
            Next
          </Button> */}
        </Flex>
      </Container>
      {renderBrewStep()}
    </Flex>
  );
};

export default BrewPage;
