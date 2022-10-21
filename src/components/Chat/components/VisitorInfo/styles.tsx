import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';

export const Box = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  borderTop: `2px solid ${theme.palette.border.main}`,
  boxShadow: `0 0.3em 0.5em -0.3em inset ${theme.palette.border.dark}`,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: '3vh 1em',
  height: '100%',
  background: theme.gradient.main,
}));

export const Header = styled(Typography)({
  justifyContent: 'space-between',
  display: 'flex',
  width: '100%',
  alignItems: 'baseline',
  marginBottom: '3vh',
});

export const UserName = styled(Typography)({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const UserStatus = styled(Typography)({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const AvatarImg = styled(Avatar)(({ theme }: { theme: Theme }) => ({
  boxShadow: `0 0.5em 0.5em -0.2em ${theme.palette.border.dark}`,
  width: '100%',
  height: '100%',
  borderRadius: '20px',
}));
