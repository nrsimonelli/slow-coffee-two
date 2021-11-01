import DropdownMenuPrimitive, {
  Root,
  Trigger,
  Content,
  Item,
} from '@radix-ui/react-dropdown-menu';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { styled } from '../../stitches.config';

const StyledContent = styled(Content, {
  width: '100vw',
  backgroundColor: '$base3',
  padding: 0,
  position: 'absolute',
  top: 14,
  left: -16,
});

const itemStyles = {
  all: 'unset',
  fontSize: '$2',
  lineHeight: 1,
  color: '$primary11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  position: 'relative',
  px: 16,
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$primary8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$primary9',
    color: '$primary1',
  },
};

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$hiContrast',
  backgroundColor: 'transparent',
  boxShadow: '0 0 1px $colors$hiContrast',
  '&:hover': { backgroundColor: '$base5' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$hiContrast` },
});

const StyledItem = styled(Item, { ...itemStyles });

const MenuDropdown = () => {
  return (
    <Root>
      <Trigger asChild>
        <IconButton>
          <HiOutlineMenu />
        </IconButton>
      </Trigger>

      <StyledContent>
        <StyledItem>
          <Link to={ROUTES.HOME.PATH}>Home</Link>
        </StyledItem>
        <StyledItem>
          <Link to={ROUTES.ABOUT.PATH}>About</Link>
        </StyledItem>
        <StyledItem>
          <Link to={ROUTES.SUPPORT.PATH}>Support</Link>
        </StyledItem>
        <StyledItem>
          <Link to={ROUTES.BREW.PATH}>Brew</Link>
        </StyledItem>
      </StyledContent>
    </Root>
  );
};

export default MenuDropdown;
