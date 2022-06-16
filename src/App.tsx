import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Chat from './components/Chat';
import { createStore } from './store/main';
import theme from './styles';

export const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Chat />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
