import { differenceInMonths } from 'date-fns';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

export function formatMoney(value: number) {
  return formatter.format(value);
}

export function calculateMonthlyDeposit(total: number, reachDate: Date) {
  const today = new Date();
  const numberOfDeposits = differenceInMonths(reachDate, today);
  const depositValue = total / numberOfDeposits;
  return { numberOfDeposits, depositValue };
}
