import React from 'react';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const Nav = () => {
  return (
    <Flex
      align='center'
      justify='center'
      css={{ height: '$6', bg: '$bronze9' }}
    >
      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
