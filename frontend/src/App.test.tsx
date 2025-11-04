import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders auction platform heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Auction Platform/i);
  expect(headingElement).toBeInTheDocument();
});
