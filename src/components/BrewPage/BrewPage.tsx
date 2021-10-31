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
import FinalPour from './FinalPour';
import ProgressBar from '../ProgressBar';
import { Button } from '../Button';
import { useInterval } from './useInterval';
import EndScreen from './EndScreen';

const BrewPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);

  const [progressBarValue, setProgressBarValue] = useState(0);
  const [progressTimeValue, setProgressTimeValue] = useState(400);

  const [delay, setDelay] = useState(400);
  const [isTiming, setIsTiming] = useState(false);

  const coffee = Math.ceil(sliderValue * 15);
  const water = Math.ceil((sliderValue * 225) / 50) * 50 + 100;

  useInterval(
    () => {
      if (progressBarValue === 100) {
        setProgressBarValue(0);
        handleStepChange();
      } else {
        setProgressBarValue(progressBarValue + 1);
      }
    },
    isTiming ? delay : null
  );

  const handleStepChange = () => {
    if (currentStep === 7) {
      setIsTiming(false);
      setCurrentStep(8);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const resetProgress = () => {
    setProgressBarValue(0);
    setIsTiming(false);
  };

  const shouldDisableNext = sliderValue !== 0 ? false : true;

  const renderBrewStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Volume value={sliderValue} setValue={setSliderValue} />
        );
      case 1:
        return <Materials coffee={coffee} water={water} />;
      case 2:
        return <Setup />;
      case 3:
        return <Bloom target={TARGETS.BLOOM} />;
      case 4:
        return <FirstPour target={TARGETS.FIRST} />;
      case 5:
        return <SecondPour target={TARGETS.SECOND} />;
      case 6:
        return <FinalPour target={TARGETS.FINAL} />;
      case 7:
        return <EndScreen />;
      default:
        return <EndScreen />;
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

  const TARGETS = {
    BLOOM: coffee * 2,
    FIRST: coffee * 6,
    SECOND: coffee * 11,
    FINAL: coffee * 15,
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
        <Flex
          direction='column'
          css={{ width: '$full', flexShrink: 0 }}
        >
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
        css={{ flexGrow: '1', height: '$full' }}
      >
        {renderBrewStep()}
        <Flex
          direction='column'
          align='center'
          justify='start'
          css={{ height: '50%' }}
        >
          <ProgressBar
            barValue={progressBarValue}
            timeValue={progressTimeValue}
          />
          <Flex
            align='center'
            justify='center'
            pad='4'
            css={{ width: '$full', mt: '$5' }}
          >
            <Button
              color='primary'
              disabled={shouldDisableNext}
              onClick={handleStepChange}
              css={{ px: '$4', mx: '$3' }}
            >
              Next
            </Button>
            <Button
              color='primary'
              onClick={resetProgress}
              css={{ px: '$4', mx: '$3' }}
            >
              Reset
            </Button>
            <Button
              color='primary'
              onClick={() => setIsTiming(!isTiming)}
              css={{ px: '$4', mx: '$3' }}
            >
              {isTiming ? 'Pause' : 'Go!'}
            </Button>
          </Flex>
          <Flex direction='column'>
            <TextSub>
              <div>Delay: {delay}ms </div>
              <div>ProgressValue: {progressBarValue}%</div>
              <div>ProgressTime: {progressTimeValue}ms</div>
            </TextSub>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BrewPage;
