import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {},
      fonts: {},
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
