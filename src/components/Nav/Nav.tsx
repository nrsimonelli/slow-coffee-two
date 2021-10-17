import React from 'react';
import { Flex } from '../Flex';
import { Div } from '../Div';
import { GiCoffeePot } from 'react-icons/gi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <Flex
      border
      pad='4'
      align='center'
      justify='between'
      css={{
        height: '$6',
        bg: '$base7',
        '@bp1': { bg: '$accent9' },
      }}
    >
      <Div css={{ '@bp1': { display: 'none' } }}>Menu</Div>
      <Div css={{ fontSize: '$5' }}>
        <GiCoffeePot />
      </Div>
      <Div
        css={{ display: 'none', '@bp1': { display: 'inline-flex' } }}
      >
        <NavLink exact to='/' activeStyle={{ fontWeight: 'bold' }}>
          Home
        </NavLink>
        <NavLink
          exact
          to='/about'
          activeStyle={{ fontWeight: 'bold' }}
        >
          About
        </NavLink>
        <NavLink
          exact
          to='/support'
          activeStyle={{ fontWeight: 'bold' }}
        >
          Support
        </NavLink>
      </Div>

      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
