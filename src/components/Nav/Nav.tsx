import React from 'react';
import { Flex } from '../Flex';
import { Div } from '../Div';
import { GiCoffeePot } from 'react-icons/gi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ROUTES, ROUTES } from '../../constants';
import { theme } from '../../stitches.config';
import MenuDropdown from './MenuDropdown';

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
      <Div css={{ '@bp2': { display: 'none' } }}>
        <MenuDropdown />
      </Div>
      <Div css={{ fontSize: '$5' }}>
        <Link to={ROUTES.HOME.PATH}>
          <GiCoffeePot />
        </Link>
      </Div>
      <Flex
        justify='end'
        align='center'
        css={{
          display: 'none',
          flexGrow: '1',
          px: '$1',
          height: '$full',
          '@bp2': { display: 'flex' },
          '& > .nav-link': {
            height: '$5',
            display: 'flex',
            alignItems: 'center',
            cursor: 'auto',
            userSelect: 'none',
          },
        }}
      >
        {NAV_ROUTES.map((link, index) => (
          <NavLink
            key={index}
            className='nav-link'
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
