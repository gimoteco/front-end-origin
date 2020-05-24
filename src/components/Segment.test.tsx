import React from 'react';
import { render } from '../../jest/test-utils';
import Segment from './Segment';

describe('Segment', () => {
  it('should render according snapshot', () => {
    const { container } = render(
      <Segment>{{ top: 'Hello World', bottom: 'an awesome world' }}</Segment>
    );

    expect(container).toMatchSnapshot();
  });
});
