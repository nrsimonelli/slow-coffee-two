import React from 'react';

const OkButton = (data) => {
  return (
    <>
      {data.isActive ? (
        <div
          className='button rounded-full mt-8 mb-4 mx-4 w-32 bg-accent-500 border-accent-500 text-primary-300 dark:bg-accent-400 dark:border-accent-400 dark:text-black-800 p-4 text-xs text-center'
          onClick={data.handleOk}
        >
          Next
        </div>
      ) : (
        <div className='button rounded-full mt-8 mb-4 mx-4 w-32 bg-primary-500 border-primary-500 text-primary-300 dark:bg-primary-400 dark:border-primary-400 dark:text-black-800 p-4 text-xs text-center'>
          Next
        </div>
      )}
    </>
  );
};

export default OkButton;
