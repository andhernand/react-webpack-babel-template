import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('App successfully renders', async () => {
  const { getByText } = render(<App />);
  await getByText('React Webpack Babel Template');
});
