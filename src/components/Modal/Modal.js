import React, { useState } from 'react';
import ModalCard from './ModalCard';

import { BsLightningFill } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import { RiCupFill } from 'react-icons/ri';

// modal states
const STATES = {
  VOLUME: 'volume',
  STRENGTH: 'strength',
  CONFIRM: 'confirm',
  GO: 'go',
};

const Modal = (props) => {
  const [modalState, setModalState] = useState(STATES.VOLUME);
  const [activeCardId, setActiveCardId] = useState('');
  const [activeSettings, setActiveSettings] = useState({
    volume: '',
    strength: '',
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
      <div className='modal-content w-full container-sm container-md mx-auto bg-primary-300 text-black-800 dark:bg-black-700 dark:text-primary-300 flex'>
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

        <div className='p-6 form-container flex-row justify-center'>
          <ModalCard
            activeId={activeCardId}
            setActiveId={setActiveCardId}
            id='1'
          />
          <ModalCard
            activeId={activeCardId}
            setActiveId={setActiveCardId}
            id='2'
          />
          <ModalCard
            activeId={activeCardId}
            setActiveId={setActiveCardId}
            id='3'
          />
        </div>
        <div className='w-full flex-row justify-center items-center py-6'>
          {modalState === STATES.VOLUME ? (
            <div
              className='cancel-button button border-accent-500 dark:border-accent-400 rounded-full mt-8 mb-4 mx-4 w-32 bg-transparent text-accent-500 dark:text-accent-400 p-4 text-xs text-center'
              onClick={props.cancel}
            >
              Cancel
            </div>
          ) : (
            <div
              className='cancel-button button border-accent-500 rounded-full mt-8 mb-4 mx-4 w-32 bg-transparent text-accent-500 dark:text-accent-400 dark:border-accent-400 p-4 text-xs text-center'
              onClick={handleBack}
            >
              Back
            </div>
          )}
          <div
            className='button rounded-full mt-8 mb-4 mx-4 w-32 bg-accent-500 border-accent-500 text-primary-300 dark:bg-accent-400 dark:border-accent-400 dark:text-black-800 p-4 text-xs text-center'
            onClick={handleOk}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
