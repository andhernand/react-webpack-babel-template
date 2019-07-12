import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('App successfully renders', () => {
  const { getByText } = render(<App />);
  getByText('React Webpack Babel Template');
});
