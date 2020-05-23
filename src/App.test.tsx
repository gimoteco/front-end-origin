import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render } from '../jest/test-utils';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});
