import React from 'react';
import { render } from '../../jest/test-utils';
import Header from './Header';

describe('Header', () => {
  it('should render according snapshot', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
