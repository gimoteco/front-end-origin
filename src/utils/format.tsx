const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

export function formatMoney(value: number) {
  return formatter.format(value);
}
