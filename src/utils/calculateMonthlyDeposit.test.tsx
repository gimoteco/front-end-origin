import { addMonths } from 'date-fns';
import { calculateMonthlyDeposit } from './calculateMonthlyDeposit';

describe('calculateMonthlyDeposit', () => {
  const total = 4000;
  it('should compute 1 deposit of the entire value if reach date is current month ', () => {
    const currentMonth = new Date();

    const result = calculateMonthlyDeposit(total, currentMonth);

    expect(result).toEqual({
      depositValue: total,
      numberOfDeposits: 1
    });
  });

  it('should compute deposit value ', () => {
    const expectedNumberOfDeposits = 5;
    const reachDate = addMonths(new Date(), expectedNumberOfDeposits - 1);

    const result = calculateMonthlyDeposit(total, reachDate);

    expect(result).toEqual({
      depositValue: total / expectedNumberOfDeposits,
      numberOfDeposits: expectedNumberOfDeposits
    });
  });
});
