import { styled } from '../stitches.config';

export const Button = styled('button', {
  // get rid of ugly default styles
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '$1',
  WebkitTaphighlightColor: 'rgba(0,0,0,0)',
  px: '$3',
  py: '$2',

  '&:disabled': {
    backgroundColor: '$base2',
    boxShadow: 'inset 0 0 0 1px $colors$base7',
    color: '$base8',
    pointerEvents: 'none',
  },

  variants: {
    shape: {
      1: {
        borderRadius: '$1',
      },
      2: {
        borderRadius: '$2',
      },
      3: {
        borderRadius: '$3',
      },
      4: {
        borderRadius: '$4',
      },
      5: {
        borderRadius: '$5',
      },
      6: {
        borderRadius: '$6',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
    },
    type: {
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      hot: {
        fontWeight: '$2',
      },
      light: {
        fontWeight: '$2',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary4',
        color: '$primary11',
        '&:hover': {
          backgroundColor: '$primary5',
        },
        '&:active': {
          backgroundColor: '$primary6',
        },
      },
      secondary: {
        backgroundColor: '$secondary4',
        color: '$secondary11',
        '&:hover': {
          backgroundColor: '$secondary5',
        },
        '&:active': {
          backgroundColor: '$secondary6',
        },
      },
      accent: {
        backgroundColor: '$accent4',
        color: '$accent11',
        '&:hover': {
          backgroundColor: '$accent5',
        },
        '&:active': {
          backgroundColor: '$accent6',
        },
      },
      base: {
        backgroundColor: '$base4',
        color: '$base11',
        '&:hover': {
          backgroundColor: '$base5',
        },
        '&:active': {
          backgroundColor: '$base6',
        },
      },
      transparent: {
        backgroundColor: '$ghost1',
        color: '$hiContrast',
        boxShadow: 'inset 0 0 0 1px $colors$ghost3',
        '&:hover': {
          backgroundColor: '$ghost2',
        },
        '&:active': {
          backgroundColor: '$ghost3',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$ghost4, 0 0 0 1px $colors$ghost4',
        },
      },
    },
  },

  defaultVariants: {
    shape: '2',
    size: '2',
  },
});

export const ToggleButton = styled(Button, {
  // boxShadow: 'inset 0 0 0 1px $colors$base7',
  // '&:hover': {
  //   backgroundColor: '$base6',
  //   boxShadow: 'inset 0 0 0 1px $colors$base8',
  // },
  // '&:focus': {
  //   boxShadow:
  //     'inset 0 0 0 1px $colors$base8, 0 0 0 1px $colors$base8',
  // },
  defaultVariants: {
    shape: '2',
    size: '4',
    color: 'transparent',
  },
});
