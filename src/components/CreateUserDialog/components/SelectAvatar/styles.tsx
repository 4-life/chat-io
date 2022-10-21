import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';
import { Box } from '@mui/material';

export const ImageButton = styled(ButtonBase)(
  ({ theme }: { theme: Theme }) => ({
    position: 'relative',
    width: 100,
    height: 100,
    border: '3px solid transparent',
    borderRadius: '2em',

    [theme.breakpoints.down('sm')]: {
      width: 70,
      height: 70,
    },

    '&:disabled': {
      opacity: 0.2,
    },

    '&.active': {
      border: `3px solid ${theme.palette.border.light}`,
      boxShadow: `0 0 0.5em 0.4em ${theme.palette.border.light}`,
    },
  })
);

export const FakeButton = styled('div')(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  width: 100,
  height: 1,
  border: '3px solid transparent',

  [theme.breakpoints.down('sm')]: {
    width: 70,
  },
}));

export const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: '100%',
  backgroundPosition: 'center 40%',
  borderRadius: '2em',
  transition: 'all .5s ease',

  '&:hover': {
    backgroundSize: '110%',
  },
});

export const Avatars = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1em 0',
  justifyContent: 'space-between',
});
