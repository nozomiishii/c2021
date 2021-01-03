import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

test('should render', () => {
  render(<Home />);
  screen.debug();
});
