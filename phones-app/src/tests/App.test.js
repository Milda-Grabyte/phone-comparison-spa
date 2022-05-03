import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders App component without crashing', () => {
  render(<App />);
  expect(screen.getByText('Phone Store')).toBeInTheDocument();
});