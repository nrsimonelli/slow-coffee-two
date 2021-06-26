import React from 'react';
import ThemeToggle from '../Theme/ThemeToggle';

const Nav = () => {
  return (
    <div className='nav-root w-full flex-row justify-between items-center h-20'>
      <h1 className='mx-4 dark:text-primary-300'>Slow Coffee</h1>
      <div className='mx-4'>
        <ThemeToggle />
      </div>
    </div>
  ); // end return
};

export default Nav;
