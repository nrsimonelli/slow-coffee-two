import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = (props) => {
  const [pourStep, setPourStep] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const renderTime = ({ remainingTime }) => {
    if (isRunning) {
      return <div>{remainingTime}</div>;
    }
    if (!isRunning) {
      return (
        <div
          className='button rounded-full mt-8 mb-4 mx-4 w-32 bg-accent-500 hover:bg-accent-600 border-accent-500 text-white-300 dark:bg-accent-400 hover:dark:bg-accent-300 dark:border-accent-400 dark:text-black-800 p-4 text-xs text-center'
          onClick={() => {
            setIsRunning(true);
          }}
        >
          GO
        </div>
      );
    }
  };

  return (
    <CountdownCircleTimer
      onComplete={() => {
        if (pourStep === 3) {
          return [false, 1000];
        }
        setIsWaiting(!isWaiting);
        setPourStep(pourStep + 1);
        return [true, 1000];
      }}
      isPlaying={isRunning}
      duration={6}
      colors={[
        ['#f472b6', 0.5],
        ['#db2777', 0.5],
      ]}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default Timer;
