import React from 'react';
import { render } from '../../jest/test-utils';
import Field from './Field';
import { InputType } from './Input';

describe('Field', () => {
  it('should render money input according snapshot', () => {
    const { container } = render(
      <Field
        id="some-id"
        onChange={jest.fn()}
        value={40000}
        type={InputType.Money}
        label="Salary"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render month input according snapshot', () => {
    const { container } = render(
      <Field
        id="some-id"
        onChange={jest.fn()}
        value={new Date(2200, 0, 1)}
        type={InputType.Month}
        label="Reach date"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
