import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { keyframes, styled, SxProps } from '@mui/material/styles';
import { Theme } from 'styles';

const AVATAR_SIZE = 64;

const reveal = keyframes`
  0% {
    transform: scale(0) translate3d(0, 60px, 0);
  }
  50% {
    transform: scale(0) translate3d(0, 60px, 0);
  }
  100% {
    transform: scale(1) translate3d(0, 0, 0);
  }
`;

export const UserText = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  borderTop: `1px solid ${theme.palette.border.light}`,
  borderBottom: `1px solid ${theme.palette.border.dark}`,
  boxShadow: `0 .6em 1em -0.4em ${theme.palette.border.dark}`,
  padding: '1em 1.5em',
  borderRadius: '15px',
  background: 'linear-gradient(0deg, #343d67 0%, #4b578f 100%)',
  animation: `${reveal} .7s ease`,
  maxWidth: '60%',
  minWidth: '30%',
  margin: '0 2em',

  [theme.breakpoints.down('sm')]: {
    margin: '0 1em',
    minWidth: '50%',
    maxWidth: '100%',
  },
}));

export const TextDate = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.grey[500],
  textAlign: 'right',
  paddingTop: '.5em',
  fontSize: '.8rem',
}));

export const icon: SxProps<Theme> = {
  fontSize: '1rem',
  marginRight: '.5em',
  verticalAlign: 'text-bottom',
};

export const MsgRoot = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  marginBottom: '2em',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '1em',
  },
}));

export const MsgText = styled(Box)({
  display: 'flex',
  flex: 'auto',
});

export const MsgAvatar = styled(Box)({
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  display: 'flex',
});

export const AvatarImage = styled(Avatar)({
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  borderRadius: '20px',
});
