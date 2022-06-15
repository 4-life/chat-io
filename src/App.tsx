import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Chat from './components/Chat';
import theme from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
