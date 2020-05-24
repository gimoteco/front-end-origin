import React from 'react';
import { render } from '../../jest/test-utils';
import Card from './Card';

describe('Card', () => {
  it('should render according snapshot', () => {
    const { container } = render(
      <Card title="Hello World" subtitle="awesome subtitle" icon={null}>
        Hello World
      </Card>
    );

    expect(container).toMatchSnapshot();
  });
});
