import { styled } from '../stitches.config';

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  fontWeight: '400',
  margin: '0',
  display: 'block',

  mt: '$4',

  variants: {
    line: {
      1: {
        lineHeight: '$1',
      },
      2: {
        lineHeight: '$2',
      },
      3: {
        lineHeight: '$3',
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
      coffee: {
        color: '$brown11',
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
    inline: {
      true: {
        mt: 0,
        display: 'inline-flex',
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
      color: 'coffee',
      gradient: 'true',
      css: {
        gradient: 'to left, $colors$gold11, $colors$brown11',
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
  defaultVariants: {
    line: '1',
    size: '3',
    weight: '1',
    color: 'lowContrast',
    case: 'initial',
    inline: false,
    gradient: 'false',
  },
});

export const TextTitle = styled(Text, {
  mb: '$4',
  defaultVariants: {
    line: '3',
    size: '8',
    weight: '1',
    color: 'hiContrast',
    case: 'capitalize',
    inline: false,
    gradient: false,
  },
});
export const TextHead = styled(Text, {
  defaultVariants: {
    line: '3',
    size: '6',
    weight: '2',
    color: 'hiContrast',
    case: 'initial',
    inline: false,
    gradient: false,
  },
});
export const TextSub = styled(Text, {
  defaultVariants: {
    line: '1',
    size: '3',
    weight: '3',
    color: 'hiContrast',
    case: 'initial',
    inline: false,
    gradient: false,
  },
});
