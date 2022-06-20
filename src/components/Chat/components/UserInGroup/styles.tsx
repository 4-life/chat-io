import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { keyframes, styled } from '@mui/material/styles';
import { Theme } from 'styles';

const reveal = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const Box = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  borderTop: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 0.3em 0.5em -0.3em inset ${theme.palette.border.dark}`,
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const UserName = styled(Typography)(({ theme }: { theme: Theme }) => ({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  paddingLeft: '1em',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const UserStatus = styled(Typography)(({ theme }: { theme: Theme }) => ({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  paddingLeft: '1em',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const Btn = styled(Button)(({ theme }: { theme: Theme }) => ({
  textTransform: 'none',
  textAlign: 'left',
  width: '100%',
  padding: '1em',
  animation: `${reveal} .7s ease`,

  [theme.breakpoints.down('sm')]: {
    padding: '10%',
  },
}));

export const TimeAgo = styled(Typography)(({ theme }: { theme: Theme }) => ({
  textAlign: 'right',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
