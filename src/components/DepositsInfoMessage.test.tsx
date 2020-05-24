import React from 'react';
import { render } from '../../jest/test-utils';
import DepositsInfoMessage from './DepositsInfoMessage';

describe('DepositsInfoMessage', () => {
  it('should render according snapshot', () => {
    const { container } = render(
      <DepositsInfoMessage
        numberOfDeposits={2}
        total={1000}
        month={'March'}
        year={'1991'}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
