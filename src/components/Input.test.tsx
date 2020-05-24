import React from 'react';
import { render } from '../../jest/test-utils';
import Input, { InputType } from './Input';

describe('Input', () => {
  it('should render money input according snapshot', () => {
    const { container } = render(
      <Input
        id="some-id"
        onChange={jest.fn()}
        value={40000}
        type={InputType.Money}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render month input according snapshot', () => {
    const { container } = render(
      <Input
        id="some-id"
        onChange={jest.fn()}
        value={new Date(2200, 0, 1)}
        type={InputType.Month}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should not render unknown input type', () => {
    const typeNotImplemented = 9999;
    const { container } = render(
      <Input
        id="some-id"
        onChange={jest.fn()}
        value={new Date(2200, 0, 1)}
        type={typeNotImplemented}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
