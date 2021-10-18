import React from 'react';
import { Flex } from '../Flex';
import { Div } from '../Div';
import { GiCoffeePot } from 'react-icons/gi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';
import { NAV_ROUTES } from '../../constants';
import { theme } from '../../stitches.config';

const Nav = () => {
  const navActiveStyle = {
    color: `${theme.colors.hiContrast}`,
    backgroundColor: `${theme.colors.base5}`,
  };
  return (
    <Flex
      align='center'
      justify='between'
      css={{
        height: '$6',
        bg: '$base3',
        px: '$4',
      }}
    >
      <Div css={{ '@bp1': { display: 'none' } }}>Menu</Div>
      <Div css={{ fontSize: '$5' }}>
        <GiCoffeePot />
      </Div>
      <Flex
        justify='end'
        align='center'
        css={{
          display: 'none',
          flexGrow: '1',
          px: '$4',
          height: '$full',
          '@bp1': { display: 'flex' },
          '& > a': {
            height: '$5',
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        {NAV_ROUTES.map((link, index) => (
          <NavLink
            key={index}
            exact
            to={link.location}
            activeStyle={navActiveStyle}
          >
            {link.title}
          </NavLink>
        ))}
      </Flex>
      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
