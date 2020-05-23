import { addDays, differenceInMonths } from 'date-fns';
import { startOfMonth } from 'date-fns/esm';
import { endOfMonth } from 'date-fns/esm/fp';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

export function formatMoney(value: number) {
  return formatter.format(value);
}

export function calculateMonthlyDeposit(total: number, reachDate: Date) {
  const thisMonth = startOfMonth(new Date());
  const endMonth = addDays(endOfMonth(reachDate), 1);

  const numberOfDeposits = differenceInMonths(endMonth, thisMonth);
  const depositValue = total / numberOfDeposits;

  return { numberOfDeposits, depositValue };
}
