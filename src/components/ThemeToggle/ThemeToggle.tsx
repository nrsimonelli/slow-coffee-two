import React, { useContext } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';
import { Button } from '../Button';
import { ThemeContext } from './ThemeContext';
import { THEMES } from '../../constants';
import { darkTheme } from '../../stitches.config';

type Props = {
  children?: object | string;
};

export const ThemeToggle = ({
  children = <RiMoonClearLine />,
}: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    switch (theme) {
      case darkTheme:
      case THEMES.DARK_THEME:
        setTheme(THEMES.DEFAULT_THEME);
        break;

      case THEMES.DEFAULT_THEME:
        setTheme(darkTheme);
        break;

      default:
        setTheme(THEMES.DEFAULT_THEME);
        break;
    }
  };

  return (
    <Button size='4' onClick={handleThemeChange}>
      {children}
    </Button>
  );
};
