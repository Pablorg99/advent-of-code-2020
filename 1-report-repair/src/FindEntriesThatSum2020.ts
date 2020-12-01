export class FindEntriesThatSum2020 {
  run(expenseReport: Array<number>) {
    for (const firstCost of expenseReport) {
      for (const secondCost of expenseReport) {
        const addition = firstCost + secondCost;
        if (addition === 2020) {
          return firstCost * secondCost;
        }
      }
    }
  }
}
