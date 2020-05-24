import React from 'react';
import { render } from '../../jest/test-utils';
import MonthlyValue from './MonthlyValue';

describe('MonthlyValue', () => {
  it('should render according snapshot', () => {
    const { container } = render(<MonthlyValue value={200} />);

    expect(container).toMatchSnapshot();
  });
});
