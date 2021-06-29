import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ex = (
  <svg
    className='landing-svg mt-4'
    version='1.1'
    viewBox='0 0 512 512'
    width='150'
    height='150'
  >
    <path
      className='fill-primary'
      fill='#F9EBDB'
      d='M491.865,391.191L485.1,414.87c-2.612,9.124-12.507,16.591-21.999,16.591H48.899
	c-9.492,0-19.387-7.467-21.999-16.591l-6.765-23.679H491.865z'
    />
    <path
      className='fill-primary'
      fill='#C8FEFF'
      d='M100.674,80.539h310.652c0,101.445-57.528,174.69-57.528,276.135H158.202
	c0-20.146-2.278-39.165-5.902-57.528h-49.44c-24.588,0-47.702-9.573-65.087-26.958s-26.958-40.5-26.958-65.087
	s9.573-47.702,26.958-65.087s40.5-26.958,65.087-26.958C101.468,103.873,100.674,92.402,100.674,80.539z M102.86,264.629h41.018
	c-10.965-38.67-25.704-75.477-34.828-115.056h-6.19c-15.372,0-29.811,5.983-40.684,16.844
	c-10.861,10.873-16.844,25.312-16.844,40.684s5.983,29.811,16.844,40.684C73.049,258.646,87.489,264.629,102.86,264.629z'
    />
    <path
      className='fill-accent'
      fill='#8E4238'
      d='M366.005,149.838c-4.89,19.421-9.757,38.314-16.223,57.977
	c-11.828,35.898-23.966,72.762-28.58,114.343H190.798c-4.614-41.581-16.752-78.445-28.58-114.343
	c-6.466-19.663-11.333-38.555-16.223-57.977c26.026,9.941,26.417,15.843,54.284,15.843c27.855,0,27.855-16.108,55.71-16.108
	c27.867,0,27.867,16.108,55.733,16.108C339.588,165.681,339.979,159.779,366.005,149.838z'
    />
    <path
      className='fill-secondary'
      fill='#E8D6BD'
      d='M503.371,399.82H8.629c-4.767,0-8.629-3.862-8.629-8.629s3.862-8.629,8.629-8.629h494.742
	c4.767,0,8.629,3.862,8.629,8.629S508.138,399.82,503.371,399.82z'
    />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // show when modal = true

  return (
    <div className='landing-root wave-layer w-full flex flex-grow justify-center items-center'>
      {ex}
      <div
        className='button rounded-full mt-8 w-32 bg-black-800 text-accent-400 dark:bg-accent-100 dark:text-accent-500 p-4 text-md text-center'
        onClick={showModal}
      >
        Brew
      </div>
      {isModalOpen ? <Modal cancel={handleCancel} /> : null}
    </div>
  ); // end return
};

export default Landing;
