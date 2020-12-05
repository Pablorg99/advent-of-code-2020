import { BinaryBoarding } from '../src/BinaryBoarding';

describe('BinaryBoarding', () => {
  const binaryBoarding = new BinaryBoarding();

  describe('for rows and columns numbers', () => {
    const seatCode1 = 'BFFFBBFRRR';
    const seatCode2 = 'FFFBBBFRRR';
    const seatCode3 = 'BBFFBBFRLL';

    it('should return the row number for the seat codes', () => {
      const rowNumber1 = binaryBoarding.rowNumberForSeatCode(seatCode1);
      const rowNumber2 = binaryBoarding.rowNumberForSeatCode(seatCode2);
      const rowNumber3 = binaryBoarding.rowNumberForSeatCode(seatCode3);

      expect(rowNumber1).toBe(70);
      expect(rowNumber2).toBe(14);
      expect(rowNumber3).toBe(102);
    });

    it('should return the column number for the seat codes', () => {
      const columnNumber1 = binaryBoarding.columnNumberForSeatCode(seatCode1);
      const columnNumber2 = binaryBoarding.columnNumberForSeatCode(seatCode2);
      const columnNumber3 = binaryBoarding.columnNumberForSeatCode(seatCode3);

      expect(columnNumber1).toBe(7);
      expect(columnNumber2).toBe(7);
      expect(columnNumber3).toBe(4);
    });
  });

  it('should return the seatId for the seat code', () => {
    const seatCode = 'FBFBBFFRLR';

    const seatId = binaryBoarding.seatIdForSeatCode(seatCode);

    expect(seatId).toBe(357);
  });

  it('should return the highest seatId from the seatCodes of seatCodes_test.txt', () => {
    const seatCodesFilePath = 'test/seatCodes_test.txt';

    const highestSeatId = binaryBoarding.highestSeatIdFrom(seatCodesFilePath);

    expect(highestSeatId).toBe(820);
  });

  describe('solutions', () => {
    it('should print the solution for part one', () => {
      const seatCodesFilePath = 'src/seatCodes.txt';

      const highestSeatId = binaryBoarding.highestSeatIdFrom(seatCodesFilePath);

      console.log(highestSeatId);
    });
  });
});
