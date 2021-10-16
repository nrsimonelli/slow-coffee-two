import React from 'react';
import { Flex } from '../Flex';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const Nav = () => {
  return (
    <Flex
      align='center'
      justify='center'
      css={{ height: '$6', bg: '$base7' }}
    >
      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
