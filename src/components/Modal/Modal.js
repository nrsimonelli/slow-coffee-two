import React, { useState } from 'react';
import ModalCard from './ModalCard';
import OkButton from './OkButton';

import {
  BsLightningFill,
  BsDropletHalf,
  BsDropletFill,
  BsDroplet,
} from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import { RiCupFill } from 'react-icons/ri';
import {
  GiCoffeeCup,
  GiCoffeeMug,
  GiCoffeePot,
} from 'react-icons/gi';

// modal states
const STATES = {
  VOLUME: 'volume',
  STRENGTH: 'strength',
  CONFIRM: 'confirm',
  GO: 'go',
};

// card states
const CARD = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

const volumeArray = [{ 1: '30' }, { 2: '40' }, { 3: '60' }];

const Modal = (props) => {
  const [modalState, setModalState] = useState(STATES.VOLUME);
  const [activeCardState, setActiveCardState] = useState({
    volume: false,
    strength: false,
  });

  const handleOk = () => {
    if (modalState === STATES.VOLUME) {
      setModalState(STATES.STRENGTH);
    }
    if (modalState === STATES.STRENGTH) {
      setModalState(STATES.CONFIRM);
    }
    if (modalState === STATES.CONFIRM) {
      setModalState(STATES.GO);
    }
  };

  const handleBack = () => {
    if (modalState === STATES.STRENGTH) {
      setModalState(STATES.VOLUME);
    }
    if (modalState === STATES.CONFIRM) {
      setModalState(STATES.STRENGTH);
    }
    if (modalState === STATES.GO) {
      setModalState(STATES.CONFIRM);
    }
  };

  const fullBar = (
    <div className='bg-accent-500 dark:bg-accent-400 w-full h-1 rounded-full'></div>
  );

  const halfBar = (
    <div className='bg-accent-500 dark:bg-accent-400 w-two-fifth h-1 rounded-full'></div>
  );

  const fifthBar = (
    <div className='bg-accent-500 dark:bg-accent-400 w-one-fifth h-1 rounded-full'></div>
  );

  return (
    <div className='modal-container w-screen h-screen flex justify-center'>
      <div className='modal-content w-full container-sm container-md mx-auto bg-white-300 text-black-800 dark:bg-black-700 dark:text-primary-300 flex'>
        <h1 className='text-center pt-6 capitalize'>{modalState}</h1>
        <div className='w-full py-6 flex-row justify-center items-center'>
          <div className='step mx-4 flex justify-center items-center text-center'>
            <div className='flex h-10 w-10 mb-2 bg-accent-500 text-white-300 dark:bg-accent-400 dark:text-black-800 rounded-full justify-center items-center'>
              <RiCupFill className='w-6 h-6' />
            </div>
            <div className='text-xs'>how much?</div>
          </div>
          <div className='w-one-fifth rounded-full h-1'>
            {modalState !== STATES.VOLUME ? fullBar : halfBar}
          </div>
          <div className='step mx-4 flex justify-center items-center text-center'>
            <div className='flex h-10 w-10 mb-2 bg-accent-500 text-white-300 dark:bg-accent-400 dark:text-black-800 rounded-full justify-center items-center'>
              <BsLightningFill className='w-6 h-6' />
            </div>
            <div className='text-xs'>how strong?</div>
          </div>
          <div className='w-one-fifth rounded-full h-1'>
            {modalState === STATES.VOLUME && null}
            {modalState === STATES.STRENGTH && fifthBar}
            {(modalState == STATES.CONFIRM ||
              modalState == STATES.GO) &&
              fullBar}
          </div>
          <div className='step mx-4 flex justify-center items-center text-center'>
            <div className='flex h-10 w-10 mb-2 bg-accent-500 text-white-300 dark:bg-accent-400 dark:text-black-800 rounded-full justify-center items-center'>
              <BiCheck className='w-8 h-8' />
            </div>
            <div className='text-xs'>final prep</div>
          </div>
        </div>
        <>
          {/* VOLUME CARDS */}
          {modalState === STATES.VOLUME && (
            <>
              <div className='p-6 form-container flex-row justify-center'>
                {/* Choice One */}
                <div
                  className={
                    activeCardState.volume === CARD.ONE
                      ? 'border-accent-500 dark:border-accent-400 card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                      : 'card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                  }
                  onClick={() =>
                    setActiveCardState({
                      ...activeCardState,
                      volume: CARD.ONE,
                    })
                  }
                >
                  <div className='text-center py-2 display-none sm:display-initial'>
                    1 to 2 Cups
                  </div>
                  <GiCoffeeCup className='h-8 w-8 mx-auto py-2 my-auto' />
                </div>

                {/* Choice Two */}
                <div
                  className={
                    activeCardState.volume === CARD.TWO
                      ? 'border-accent-500 dark:border-accent-400 card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                      : 'card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                  }
                  onClick={() =>
                    setActiveCardState({
                      ...activeCardState,
                      volume: CARD.TWO,
                    })
                  }
                >
                  <div className='text-center py-2 display-none sm:display-initial'>
                    2 to 3 Cups
                  </div>
                  <GiCoffeeMug className='h-8 w-8 mx-auto py-2 my-auto' />
                </div>
                {/* Choice Three */}
                <div
                  className={
                    activeCardState.volume === CARD.THREE
                      ? 'border-accent-500 dark:border-accent-400 card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                      : 'card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                  }
                  onClick={() =>
                    setActiveCardState({
                      ...activeCardState,
                      volume: CARD.THREE,
                    })
                  }
                >
                  <div className='text-center py-2 display-none sm:display-initial'>
                    4+ Cups
                  </div>
                  <GiCoffeePot className='h-8 w-8 mx-auto py-2 my-auto' />
                </div>
              </div>
              <div className='w-full flex-row justify-center items-center py-6'>
                <div
                  className='cancel-button button border-accent-500 dark:border-accent-400 hover:bg-white-400 hover:dark:bg-black-600 rounded-full mt-8 mb-4 mx-4 w-32 bg-transparent text-accent-500 dark:text-accent-400 p-4 text-xs text-center'
                  onClick={props.cancel}
                >
                  Cancel
                </div>
                <OkButton
                  title='next'
                  isActive={activeCardState.volume}
                  handleOk={handleOk}
                />
              </div>
            </>
          )}
          {modalState === STATES.STRENGTH && (
            <>
              <div className='p-6 form-container flex-row justify-center'>
                {/* Choice One */}
                <div
                  className={
                    activeCardState.strength === CARD.ONE
                      ? 'border-accent-500 dark:border-accent-400 card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                      : 'card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                  }
                  onClick={() =>
                    setActiveCardState({
                      ...activeCardState,
                      strength: CARD.ONE,
                    })
                  }
                >
                  <div className='text-center py-2 display-none sm:display-initial'>
                    Sweet
                  </div>
                  <BsDroplet className='h-8 w-8 mx-auto py-2 my-auto' />
                </div>

                {/* Choice Two */}
                <div
                  className={
                    activeCardState.strength === CARD.TWO
                      ? 'border-accent-500 dark:border-accent-400 card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                      : 'card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                  }
                  onClick={() =>
                    setActiveCardState({
                      ...activeCardState,
                      strength: CARD.TWO,
                    })
                  }
                >
                  <div className='text-center py-2 display-none sm:display-initial'>
                    Balanced
                  </div>
                  <BsDropletHalf className='h-8 w-8 mx-auto py-2 my-auto' />
                </div>
                {/* Choice Three */}
                <div
                  className={
                    activeCardState.strength === CARD.THREE
                      ? 'border-accent-500 dark:border-accent-400 card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                      : 'card-container dark:bg-black-600 flex w-full p-4 m-2 shadow cursor-pointer transition-all'
                  }
                  onClick={() =>
                    setActiveCardState({
                      ...activeCardState,
                      strength: CARD.THREE,
                    })
                  }
                >
                  <div className='text-center py-2 display-none sm:display-initial'>
                    Strong
                  </div>
                  <BsDropletFill className='h-8 w-8 mx-auto py-2 my-auto' />
                </div>
              </div>
              <div className='w-full flex-row justify-center items-center py-6'>
                <div
                  className='cancel-button button border-accent-500 rounded-full mt-8 mb-4 mx-4 w-32 bg-transparent text-accent-500 dark:text-accent-400 dark:border-accent-400 hover:bg-white-400 hover:dark:bg-black-600 p-4 text-xs text-center'
                  onClick={handleBack}
                >
                  Back
                </div>
                <OkButton
                  title='next'
                  isActive={activeCardState.strength}
                  handleOk={handleOk}
                />
              </div>
            </>
          )}
          {modalState === STATES.CONFIRM && (
            <>
              <div className='p-6 form-container flex-row justify-center'>
                {/* Choice One */}
                <div className='card-dull dark:bg-black-600 flex p-4 m-2 shadow transition-all'>
                  <div className=''>
                    Make sure to prepare the following before pressing
                    start.
                  </div>
                  <div>Boil 1L of water</div>
                  <div>
                    Grind{' '}
                    {
                      volumeArray[activeCardState.volume - 1][
                        activeCardState.volume
                      ]
                    }
                    g of coffee
                  </div>
                  <div>strength: {activeCardState.strength}</div>
                </div>
              </div>
              <div className='w-full flex-row justify-center items-center py-6'>
                <div
                  className='cancel-button button border-accent-500 rounded-full mt-8 mb-4 mx-4 w-32 bg-transparent text-accent-500 dark:text-accent-400 dark:border-accent-400 hover:bg-white-400 hover:dark:bg-black-600 p-4 text-xs text-center'
                  onClick={handleBack}
                >
                  Back
                </div>
                <OkButton
                  title='start'
                  isActive={true}
                  handleOk={handleOk}
                />
              </div>
            </>
          )}
          {modalState === STATES.GO && (
            <>
              <div className='p-6 form-container flex-row justify-center'>
                {/* Choice One */}
                <div className='card-dull dark:bg-black-600 flex p-4 m-2 shadow transition-all'>
                  <div>
                    Once you have all of this ready, hit go to start
                    the clock
                  </div>
                  <div>some grams: {activeCardState.volume}</div>
                  <div>some water: {activeCardState.strength}</div>
                </div>
              </div>
              <div className='w-full flex-row justify-center items-center py-6'>
                <div
                  className='cancel-button button border-accent-500 rounded-full mt-8 mb-4 mx-4 w-32 bg-transparent text-accent-500 dark:text-accent-400 dark:border-accent-400 hover:bg-white-400 hover:dark:bg-black-600 p-4 text-xs text-center'
                  onClick={handleBack}
                >
                  Cancel
                </div>
                <OkButton
                  title='Start'
                  isActive={true}
                  handleOk={handleOk}
                />
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Modal;
