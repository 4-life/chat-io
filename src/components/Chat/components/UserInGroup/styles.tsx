import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';

export const Box = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  borderTop: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 0.3em 0.5em -0.3em inset ${theme.palette.border.dark}`,
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

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

export const Btn = styled(Button)({
  textTransform: 'none',
  textAlign: 'left',
  width: '100%',
  padding: '1em',
});

export const TimeAgo = styled(Typography)({
  textAlign: 'right',
});
