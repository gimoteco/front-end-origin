import React from 'react';
import { render } from '../../jest/test-utils';
import BaseLayout from './BaseLayout';

describe('BaseLayout', () => {
  it('should render according snapshot', () => {
    const { container } = render(<BaseLayout>Hello World</BaseLayout>);

    expect(container).toMatchSnapshot();
  });
});
