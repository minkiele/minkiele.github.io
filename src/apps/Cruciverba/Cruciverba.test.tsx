import React from 'react';
import { render, screen } from '@testing-library/react';
import Cruciverba from './Cruciverba';

test('renders learn react link', () => {
  render(<Cruciverba />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
