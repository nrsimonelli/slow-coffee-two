import React from 'react';
import { Flex } from '../Flex';
import { Div } from '../Div';
import { GiCoffeePot } from 'react-icons/gi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navActiveStyle = { fontWeight: 600, textShadow: 'none' };
  return (
    <Flex
      pad='4'
      align='center'
      justify='between'
      css={{
        height: '$6',
        bg: '$base7',
      }}
    >
      <Div css={{ '@bp1': { display: 'none' } }}>Menu</Div>
      <Div css={{ fontSize: '$5' }}>
        <GiCoffeePot />
      </Div>
      <Flex
        justify='end'
        css={{
          display: 'none',
          flexGrow: '1',
          px: '$4',
          '@bp1': { display: 'flex' },
          '& > a': {
            // mx: '$1',
          },
        }}
      >
        <NavLink exact to='/' activeStyle={navActiveStyle}>
          Home
        </NavLink>
        <NavLink exact to='/about' activeStyle={navActiveStyle}>
          About
        </NavLink>
      </Flex>

      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
