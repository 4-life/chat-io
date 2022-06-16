import Box from '@mui/material/Box';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';

export const ExitButton = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.common.white,
    border: `3px solid ${theme.palette.border.main}`,
    boxShadow: `0 1em 1em -1.2em inset ${theme.palette.border.dark}, 0 2px 0.1em 0em ${theme.palette.border.dark}`,
    marginRight: '.5em',
    background: '#4f5a8f',
    borderRadius: '15px',
  })
);

export const Main = styled('main')({
  display: 'flex',
  minHeight: '100vh',
  background: 'linear-gradient(0deg, #202543 0%, #525c8b 80%)',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ChatBlock = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '75vw',
  maxWidth: '1200px',
  height: '75vh',
  borderRadius: '10px',
  boxShadow: '0 3em 4em rgb(16 19 40 / 60%)',
  borderTop: `2px solid ${theme.palette.border.light}`,
  background: 'linear-gradient(0deg, #1c213e 0%, #4b5789 60%)',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    width: '100vw',
    height: '100vh',
  },
}));

export const Header = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  height: '10vh',
  borderBottom: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 .6em 1em -1em ${theme.palette.border.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '2em 1.5em',
}));

export const Content = styled(Box)({
  flexDirection: 'row',
  height: 'calc(100% - 10vh)',
  display: 'flex',
});

export const Users = styled(Box)(({ theme }: { theme: Theme }) => ({
  flex: 1,
  display: 'flex',
  borderRight: `1px solid ${theme.palette.border.main}`,
  boxShadow: `.6em 0 1em -1em ${theme.palette.border.main}`,
  alignItems: 'flex-start',
  flexDirection: 'column',
  maxWidth: '60%',
  overflowY: 'scroll',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const Messages = styled(Box)(({ theme }: { theme: Theme }) => ({
  flex: 2,
  display: 'flex',
  position: 'relative',
  borderTop: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 0 1.5em -.5em inset ${theme.palette.border.dark}`,
}));

export const Info = styled(Box)(({ theme }: { theme: Theme }) => ({
  flex: 0,
  display: 'flex',
  transition: 'all .5s ease',
  overflow: 'hidden',

  '&.visible': {
    flex: 1.5,
    borderLeft: `1px solid ${theme.palette.border.main}`,
    boxShadow: `-.6em 0 1em -1em ${theme.palette.border.main}`,
  },
}));

export const MessagesList = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: '2em 2em 110px',
  overflowY: 'scroll',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [theme.breakpoints.down('md')]: {
    padding: '2em 0 110px',
  },
}));