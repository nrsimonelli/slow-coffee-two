import { styled } from '../stitches.config';

export const Text = styled('span', {
  // Reset
  lineHeight: '$1',
  fontWeight: '$1',
  margin: '0',
  display: 'block',

  variants: {
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
      6: {
        fontSize: '$6',
      },
      7: {
        fontSize: '$7',
      },
      8: {
        fontSize: '$8',
      },
      9: {
        fontSize: '$9',
      },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
    },
    color: {
      primary: {
        color: '$primary11',
      },
      secondary: {
        color: '$secondary11',
      },
      accent: {
        color: '$accent11',
      },
      hiContrast: {
        color: '$hiContrast',
      },
      lowContrast: {
        color: '$lowContrast',
      },
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
    },
    case: {
      upper: {
        textTransform: 'uppercase',
      },
      lower: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      initial: {
        textTransform: 'initial',
      },
    },
    gradient: {
      true: {
        clip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      color: 'white',
      gradient: 'true',
      css: {
        gradient: 'to right, $whiteA11, $white',
      },
    },
    {
      color: 'black',
      gradient: 'true',
      css: {
        gradient: 'to right, $blackA11, $black',
      },
    },
    {
      color: 'primary',
      gradient: 'true',
      css: {
        gradient: 'to right, $primary11, $accent11',
      },
    },
    {
      color: 'secondary',
      gradient: 'true',
      css: {
        gradient: 'to right, $secondary11, $primary11',
      },
    },
    {
      color: 'accent',
      gradient: 'true',
      css: {
        gradient: 'to right, $accent11, $secondary11',
      },
    },
    {
      color: 'lowContrast',
      gradient: 'true',
      css: {
        gradient: 'to right, $lowContrast, $hiContrast',
      },
    },
    {
      color: 'hiContrast',
      gradient: 'true',
      css: {
        gradient: 'to right, $hiContrast, $lowContrast',
      },
    },
  ],
  defaultVariants: {},
});

export const TextTitle = styled(Text, {
  defaultVariants: {},
});
export const TextHead = styled(Text, {
  defaultVariants: {},
});
export const TextSub = styled(Text, {
  defaultVariants: {},
});
