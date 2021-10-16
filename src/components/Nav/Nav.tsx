import React from 'react';
import { Flex } from '../Flex';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const Nav = () => {
  return (
    <Flex
      border
      pad='4'
      align='center'
      justify='end'
      css={{
        height: '$6',
        bg: '$base7',
        '@bp1': { bg: '$accent12' },
      }}
    >
      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
