import React from 'react';
import 'timers';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Zen Chat/i);
  expect(linkElement).toBeInTheDocument();
});
