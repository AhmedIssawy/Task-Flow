import { render, screen } from '@testing-library/react';
import App from './App';

// This file is for Jest tests only. Do not use for development or manual tests.

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
