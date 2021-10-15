import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, config, theme, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {},
      fonts: {
        body: 'Avenir Next, system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
      },
      fontSizes: {},
      space: {},
      sizes: {},
      radii: {},
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    media: {},
    utils: {},
  });

export type CSS = Stitches.CSS<typeof config>;
