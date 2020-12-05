import * as fs from 'fs';

export class BinaryBoarding {
  highestSeatIdFrom(seatCodesFilePath: string) {
    let seatIds: Array<number> = [];
    const seatCodes = fs.readFileSync(seatCodesFilePath).toString();
    for (const seatCode of seatCodes.split('\n')) {
      seatIds.push(this.seatIdForSeatCode(seatCode));
    }
    return Math.max(...seatIds);
  }

  seatIdForSeatCode(seatCode: string) {
    const rowNumber = this.rowNumberForSeatCode(seatCode);
    const columnNumber = this.columnNumberForSeatCode(seatCode);
    return rowNumber * 8 + columnNumber;
  }

  rowNumberForSeatCode(seatCode: string) {
    const rowCode = seatCode.slice(0, 7);
    const rowNumberInBinary = rowCode.replace(/F/g, '0').replace(/B/g, '1');
    const rowNumber = parseInt(rowNumberInBinary, 2);
    return rowNumber;
  }

  columnNumberForSeatCode(seatCode: string) {
    const columnCode = seatCode.slice(7);
    const columnNumberInBinary = columnCode.replace(/L/g, '0').replace(/R/g, '1');
    const columnNumber = parseInt(columnNumberInBinary, 2);
    return columnNumber;
  }
}
