import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './Dashboard';
import Display from './Display';

test('renders without crashing', () => {
  render(<App />);
});

test('renders the foul function', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/foul/i);
});

test('contains strike and ball display', () => {
  const {getByText} = render(<Display />);
    getByText(/strike/i);
    getByText(/ball/i);
});