import { styled } from '../stitches.config';

export const Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    pad: {
      1: {
        p: '$1',
      },
      2: {
        p: '$2',
      },
      3: {
        p: '$3',
      },
      4: {
        p: '$4',
      },
      5: {
        p: '$5',
      },
    },
    border: {
      true: {
        boxShadow: 'inset 0 0 0 1px $colors$primary8',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
    pad: '1',
    border: false,
  },
});
