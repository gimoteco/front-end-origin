import React from 'react';
import { render } from '../../jest/test-utils';
import Button from './Button';

describe('Button', () => {
  it('should render according snapshot', () => {
    const { container } = render(<Button>Hello World</Button>);

    expect(container).toMatchSnapshot();
  });
});
