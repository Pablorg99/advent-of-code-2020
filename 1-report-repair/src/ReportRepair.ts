export class ReportRepair {
  getMultiplicationOfTrioOfEntriesSumming2020(expenseReport: Array<number>) {
    for (const firstCost of expenseReport) {
      for (const secondCost of expenseReport) {
        for (const thirdCost of expenseReport) {
          const addition = firstCost + secondCost + thirdCost;
          if (addition === 2020) {
            console.log(firstCost, secondCost, thirdCost)
            return firstCost * secondCost * thirdCost;
          }
        }
      }
    }
  }
}
