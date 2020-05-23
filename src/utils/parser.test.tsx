import { parseDateParts, parseMoney } from './parser';

describe('parsers', () => {
  describe('parseMoney', () => {
    it.each(['$1000.00', '$1,000.00', '$1,000', '$1000'])(
      'should parse currency format',
      currency => {
        expect(parseMoney(currency)).toBe(1000);
      }
    );
  });

  describe('parseDateParts', () => {
    it('describe should parse date parts', () => {
      const date = new Date(2020, 0, 1);

      expect(parseDateParts(date)).toEqual({
        year: '2020',
        month: 'January'
      });
    });
  });
});
