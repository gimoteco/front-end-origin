import {
  addDays,
  differenceInMonths,
  endOfMonth,
  startOfMonth
} from 'date-fns';

export function calculateMonthlyDeposit(total: number, reachDate: Date) {
  const thisMonth = startOfMonth(new Date());
  const endMonth = addDays(endOfMonth(reachDate), 1);
  const numberOfDeposits = differenceInMonths(endMonth, thisMonth);
  const depositValue = total / numberOfDeposits;
  return { numberOfDeposits, depositValue };
}
