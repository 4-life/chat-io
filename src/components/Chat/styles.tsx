import Typography from '@mui/material/Typography';
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
    background: theme.palette.secondary.dark,
    borderRadius: '15px',
  })
);

export const Main = styled('main')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  height: '100%',
  background: theme.gradient.main,
  justifyContent: 'center',
  alignItems: 'center',
}));

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
    height: '100%',
  },
}));

export const Header = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  height: '10vh',
  borderBottom: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 .6em 1em -1em ${theme.palette.border.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
    display: 'flex',
    width: '10%',
  },
}));

export const Messages = styled(Box)(({ theme }: { theme: Theme }) => ({
  flex: 2,
  display: 'flex',
  position: 'relative',
  borderTop: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 0 1.5em -.5em inset ${theme.palette.border.dark}`,

  [theme.breakpoints.down('sm')]: {
    flex: 5,
  },
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
  width: '100%',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '1em 1em 110px',
  },
}));

export const Logo = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: '40px',
  height: '40px',
  backgroundImage: `url(/images/logo.webp)`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginRight: '1em',
  borderRadius: '7px',
  boxShadow: `0 2px 0.1em 0em ${theme.palette.border.dark}`,
  backgroundColor: 'white',
}));

export const Title = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  height: theme.typography.h4.fontSize,
  whiteSpace: 'nowrap',
}));
