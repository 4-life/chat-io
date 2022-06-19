import Dialog from '@mui/material/Dialog';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';
import { Box } from '@mui/material';

export const ConfirmButton = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.common.white,
    border: `3px solid ${theme.palette.border.main}`,
    boxShadow: `0 1em 1em -1.2em inset ${theme.palette.border.dark}, 0 2px 0.1em 0em ${theme.palette.border.dark}`,
    marginRight: '.5em',
    background: '#4f5a8f',
    borderRadius: '15px',
  })
);

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

    '&.active': {
      border: `3px solid ${theme.palette.border.light}`,
      boxShadow: `0 0 0.5em 0.4em ${theme.palette.border.light}`,
    },
  })
);

export const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '2em',
});

export const StyledDialog = styled(Dialog)(({ theme }: { theme: Theme }) => ({
  '& .MuiDialog-paper': {
    background: theme.gradient.main,
    borderRadius: '20px',
    borderTop: `2px solid ${theme.palette.border.light}`,
  },
  '& .MuiDialogActions-root': {
    justifyContent: 'center',
  },
}));

export const Avatars = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1em 0',
  justifyContent: 'space-between',
});
