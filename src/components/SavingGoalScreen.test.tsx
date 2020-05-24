import React from 'react';
import { fireEvent, render } from '../../jest/test-utils';
import SavingGoalScreen from './SavingGoalScreen';

describe('SavingGoalScreen', () => {
  it('should render according snapshot', () => {
    const { container } = render(<SavingGoalScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should compute the deposit value', async () => {
    const { getByTestId, findAllByRole, findByText } = render(
      <SavingGoalScreen />
    );
    const totalInput = getByTestId('totalAmount');

    fireEvent.change(totalInput, {
      target: { value: 1000 }
    });
    fireEvent.click((await findAllByRole('button'))[1]);

    expect(await findByText('$500')).toBeInTheDocument();
  });
});
