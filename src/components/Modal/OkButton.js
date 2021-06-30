import React from 'react';

const OkButton = (props) => {
  return (
    <>
      {props.isActive ? (
        <div
          className='button rounded-full mt-8 mb-4 mx-4 w-32 bg-accent-500 hover:bg-accent-600 border-accent-500 text-white-300 dark:bg-accent-400 hover:dark:bg-accent-300 dark:border-accent-400 dark:text-black-800 p-4 text-xs text-center'
          onClick={props.handleOk}
        >
          {props.title}
        </div>
      ) : (
        <div className='button rounded-full mt-8 mb-4 mx-4 w-32 bg-white-600 border-white-600 text-white-300 dark:bg-black-600 dark:border-black-600 dark:text-black-800 p-4 text-xs text-center'>
          {props.title}
        </div>
      )}
    </>
  );
};

export default OkButton;
