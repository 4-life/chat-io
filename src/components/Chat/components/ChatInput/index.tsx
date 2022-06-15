import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from './styles';

function ChatInput() {
  return (
    <Box>
      <TextField label="Outlined" variant="outlined" />
      <Button variant="contained" color="info">
        Send
      </Button>
    </Box>
  );
}

export default ChatInput;
