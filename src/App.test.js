import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders footer text', () => {
  const { getByText } = render(<App />);
  getByText('Our GitHub');
});