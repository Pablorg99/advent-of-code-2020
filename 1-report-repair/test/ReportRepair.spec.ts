import { ReportRepair } from "../src/ReportRepair";
import { EXPENSE_REPORT } from "./ExpenseReport";

const reportRepair = new ReportRepair();
describe("ReportRepair", () => {
  it("should return the multiplication of the three pair of entries that sum 2020", () => {
    const expenseReport = [1721, 979, 366, 299, 675, 1456];

    const multiplication = reportRepair.getMultiplicationOfTrioOfEntriesSumming2020(expenseReport);

    expect(multiplication).toBe(241861950);
  });
});

describe("solutions", () => {
  it("should return the solution for the second part", () => {
    const expenseReport = EXPENSE_REPORT;

    const multiplication = reportRepair.getMultiplicationOfTrioOfEntriesSumming2020(expenseReport);

    console.log(multiplication);
  });
});
