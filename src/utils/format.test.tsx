import { formatMoney } from './format';

describe('formaters', () => {
  describe('formatMoney', () => {
    it('should not display decimal digits if value is integer', () => {
      expect(formatMoney(1000)).toBe('$1,000');
    });

    it('should display decimal digits if value is decimal', () => {
      expect(formatMoney(1000.99)).toBe('$1,000.99');
    });
  });
});
