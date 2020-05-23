import { format as formatDate } from 'date-fns';

export function parseMoney(currency: string) {
  return Number(currency.replace(/[^0-9.-]+/g, ''));
}

export function parseDateParts(date: Date) {
  const month = formatDate(date, 'LLLL');
  const year = formatDate(date, 'yyyy');
  return { month, year };
}
