import { Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';
import Input from '@mui/material/Input';

export const Box = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  height: '100px',
  padding: '1em',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  background: 'linear-gradient(0deg, #1b213e 0%, rgba(52, 61, 107, 0.8) 100%)',
  borderTop: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 -.6em 1em -1em ${theme.palette.border.main}`,
  alignItems: 'center',
  backdropFilter: 'blur(10px)',

  [theme.breakpoints.down('md')]: {
    position: 'fixed',
  },
}));

export const StyledPopover = styled(Popover)({
  '& .MuiPopover-paper': {
    background: 'transparent',
  },
});

export const StyledInput = styled(Input)({
  marginTop: '4px',
});
