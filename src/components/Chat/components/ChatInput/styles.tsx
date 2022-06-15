import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';
import { Theme } from '~/styles';

export const ExitButton = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
    boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  })
);

export const Box = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'block',
  height: '100px',
  padding: '1em',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  background: 'linear-gradient(0deg, #1b213e 50%, rgba(52, 61, 107, 0.8) 100%)',
  borderTop: `1px solid ${theme.palette.border.main}`,
  boxShadow: `0 -.6em 1em -1em ${theme.palette.border.main}`,
}));
