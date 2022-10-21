import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { Theme } from 'styles';

const StyledDialog = styled(Dialog)(({ theme }: { theme: Theme }) => ({
  '& .MuiDialog-paper': {
    background: theme.gradient.main,
    borderRadius: '20px',
    borderTop: `2px solid ${theme.palette.border.light}`,
  },
  '& .MuiDialogActions-root': {
    justifyContent: 'center',
  },
}));

export default StyledDialog;
