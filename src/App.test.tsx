import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { fireEvent, render } from '../jest/test-utils';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });

  it('should compute the deposit value', async () => {
    const { getByTestId, findAllByRole, findByText } = render(<App />);
    const totalInput = getByTestId('totalAmount');

    fireEvent.change(totalInput, {
      target: { value: 1000 }
    });
    fireEvent.click((await findAllByRole('button'))[1]);

    expect(await findByText('$500')).toBeInTheDocument();
  });
});
