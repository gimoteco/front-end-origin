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
    const input = (await getByTestId('moneyInput')) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value }
    });

    expect(input.value).toBe(formatMoney(value).replace('$', ''));
    expect(onChangeMock).toHaveBeenCalledWith(value);
  });
});
