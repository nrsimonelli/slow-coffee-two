import {
  mauve,
  mauveDark,
  slate,
  slateDark,
  olive,
  oliveDark,
  bronze,
  bronzeDark,
  whiteA,
  blackA,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { SCREENS } from './constants';
import { THEMES } from './constants';

export const { styled, config, theme, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {
        ...mauve,
        ...slate,
        ...olive,
        ...bronze,
        ...whiteA,
        ...blackA,

        // App backgrounds and raised components
        // 1 - 2 - 3
        // normal, hover, active. Buttons are +1 to each
        // 3 - 4 - 5
        // borders non-interactive, interactive, hover
        // 6 - 7 - 8
        // pure color & solid bg
        // 9 - 10
        // low and high contrast text
        // 11 - 12
        // Dark modes use the same scale

        appBg1: '$base1',
        appBg2: '$base2',
        appBg3: '$base3',

        colorBg1: '$primary9',
        colorBg2: '$primary10',

        border1: '$base6',
        border2: '$base7',
        border3: '$base8',

        lowContrast: '$base11',
        hiContrast: '$base12',

        white: '$whiteA12',
        black: '$blackA12',

        ghost1: '$blackA2',
        ghost2: '$blackA4',
        ghost3: '$blackA5',
        ghost4: '$blackA7',

        base1: '$slate1',
        base2: '$slate2',
        base3: '$slate3',
        base4: '$slate4',
        base5: '$slate5',
        base6: '$slate6',
        base7: '$slate7',
        base8: '$slate8',
        base9: '$slate9',
        base10: '$slate10',
        base11: '$slate11',
        base12: '$slate12',

        primary1: '$mauve1',
        primary2: '$mauve2',
        primary3: '$mauve3',
        primary4: '$mauve4',
        primary5: '$mauve5',
        primary6: '$mauve6',
        primary7: '$mauve7',
        primary8: '$mauve8',
        primary9: '$mauve9',
        primary10: '$mauve10',
        primary11: '$mauve11',
        primary12: '$mauve12',

        secondary1: '$olive1',
        secondary2: '$olive2',
        secondary3: '$olive3',
        secondary4: '$olive4',
        secondary5: '$olive5',
        secondary6: '$olive6',
        secondary7: '$olive7',
        secondary8: '$olive8',
        secondary9: '$olive9',
        secondary10: '$olive10',
        secondary11: '$olive11',
        secondary12: '$olive12',

        accent1: '$bronze1',
        accent2: '$bronze2',
        accent3: '$bronze3',
        accent4: '$bronze4',
        accent5: '$bronze5',
        accent6: '$bronze6',
        accent7: '$bronze7',
        accent8: '$bronze8',
        accent9: '$bronze9',
        accent10: '$bronze10',
        accent11: '$bronze11',
        accent12: '$bronze12',
      },
      fonts: {
        body: 'Avenir Next, system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
        4: '20px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '96px',
      },
      space: {
        1: 0,
        2: '4px',
        3: '8px',
        4: '16px',
        5: '32px',
        6: '64px',
        7: '128px',
        8: '256px',
        9: '512px',
      },
      sizes: {
        1: 0,
        2: '4px',
        3: '8px',
        4: '16px',
        5: '32px',
        6: '64px',
        7: '128px',
        8: '256px',
        9: '512px',
        full: '100%',
        vh: '100vh',
        vw: '100vw',
        bp1: SCREENS[1],
        bp2: SCREENS[2],
        bp3: SCREENS[3],
        bp4: SCREENS[4],
        bp5: SCREENS[5],
      },
      radii: {
        1: 0,
        2: '8px',
        3: '12px',
        4: '16px',
        5: '9999px',
        6: '50%',
      },
      fontWeights: {
        1: '400',
        2: '600',
        3: '700',
      },
      lineHeights: {
        1: '1.75',
        2: '1.25',
        3: '1',
      },
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      shadows: {},
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '999',
      },
      transitions: {},
    },
    media: {
      bp1: `(min-width: ${SCREENS[1]})`,
      bp2: `(min-width: ${SCREENS[2]})`,
      bp3: `(min-width: ${SCREENS[3]})`,
      bp4: `(min-width: ${SCREENS[4]})`,
      bp5: `(min-width: ${SCREENS[5]})`,
    },
    utils: {
      bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      clip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
      gradient: (
        value: Stitches.PropertyValue<'backgroundImage'>
      ) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme(THEMES.DARK_THEME, {
  colors: {
    ...mauveDark,
    ...slateDark,
    ...oliveDark,
    ...bronzeDark,
    ...whiteA,
    ...blackA,

    appBg1: '$base1',
    appBg2: '$base2',
    appBg3: '$base3',

    colorBg1: '$primary9',
    colorBg2: '$primary10',

    border1: '$base6',
    border2: '$base7',
    border3: '$base8',

    lowContrast: '$base11',
    hiContrast: '$base12',

    white: '$whiteA12',
    black: '$blackA12',

    ghost1: '$whiteA2',
    ghost2: '$whiteA4',
    ghost3: '$whiteA5',
    ghost4: '$whiteA7',

    base1: '$slate1',
    base2: '$slate2',
    base3: '$slate3',
    base4: '$slate4',
    base5: '$slate5',
    base6: '$slate6',
    base7: '$slate7',
    base8: '$slate8',
    base9: '$slate9',
    base10: '$slate10',
    base11: '$slate11',
    base12: '$slate12',

    primary1: '$mauve1',
    primary2: '$mauve2',
    primary3: '$mauve3',
    primary4: '$mauve4',
    primary5: '$mauve5',
    primary6: '$mauve6',
    primary7: '$mauve7',
    primary8: '$mauve8',
    primary9: '$mauve9',
    primary10: '$mauve10',
    primary11: '$mauve11',
    primary12: '$mauve12',

    secondary1: '$olive1',
    secondary2: '$olive2',
    secondary3: '$olive3',
    secondary4: '$olive4',
    secondary5: '$olive5',
    secondary6: '$olive6',
    secondary7: '$olive7',
    secondary8: '$olive8',
    secondary9: '$olive9',
    secondary10: '$olive10',
    secondary11: '$olive11',
    secondary12: '$olive12',

    accent1: '$bronze1',
    accent2: '$bronze2',
    accent3: '$bronze3',
    accent4: '$bronze4',
    accent5: '$bronze5',
    accent6: '$bronze6',
    accent7: '$bronze7',
    accent8: '$bronze8',
    accent9: '$bronze9',
    accent10: '$bronze10',
    accent11: '$bronze11',
    accent12: '$bronze12',
  },
});
