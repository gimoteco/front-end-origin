import * as React from 'react';
import { fireEvent, render } from '../../jest/test-utils';
import { formatMoney } from '../utils/format';
import MoneyInput from './MoneyInput';

describe('MoneyInput', () => {
  it('should format the value', async () => {
    const value = 3000;
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <MoneyInput id="moneyInput" onChange={onChangeMock} />
    );
    const input = getByTestId('moneyInput') as HTMLInputElement;

    fireEvent.change(input, {
      target: { value }
    });

    expect(input.value).toBe(formatMoney(value).replace('$', ''));
    expect(onChangeMock).toHaveBeenCalledWith(value);
  });

  it('should clean the value', async () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <MoneyInput id="moneyInput" onChange={onChangeMock} />
    );
    const input = getByTestId('moneyInput') as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: null }
    });

    expect(input.value).toBe('');
  });

  it('should render according snapshot', () => {
    const { container } = render(
      <MoneyInput id="some-id" onChange={jest.fn()} value={40000} />
    );

    expect(container).toMatchSnapshot();
  });
});
