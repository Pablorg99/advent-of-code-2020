import { HandyHaversacks } from '../src/HandyHaversacks';

describe('HandyHaversacks', () => {
  it('should return the number of colors of bags that can contain at least one shiny gold bag', () => {
    const rulesFilePath = 'test/rules.test.txt';
    const handyHaversacks = new HandyHaversacks(rulesFilePath);
    const bagToSearch = 'shiny gold';

    const bagsContainingGoldBags = handyHaversacks.numberOfContainersFor(bagToSearch);

    expect(bagsContainingGoldBags).toBe(4);
  });

  it('should return the total number of bags that can contain the passed bag', () => {
    const rulesFilePath = 'test/rules.test.txt';
    const handyHaversacks = new HandyHaversacks(rulesFilePath);
    const parentBag = 'shiny gold';

    const bagsContained = handyHaversacks.totalNestedBagsFrom(parentBag);

    expect(bagsContained).toBe(32);
  });

  it('should return the total number of bags that can contain the passed bag', () => {
    const rulesFilePath = 'test/rules.2.test.txt';
    const handyHaversacks = new HandyHaversacks(rulesFilePath);
    const parentBag = 'shiny gold';

    const bagsContained = handyHaversacks.totalNestedBagsFrom(parentBag);

    expect(bagsContained).toBe(126);
  });

  describe('solutions', () => {
    it('should print the solution of part one', () => {
      const rulesFilePath = 'src/rules.txt';
      const handyHaversacks = new HandyHaversacks(rulesFilePath);
      const bagToSearch = 'shiny gold';

      const bagsContainingGoldBags = handyHaversacks.numberOfContainersFor(bagToSearch);

      console.log(bagsContainingGoldBags);
    });

    it('should print the solution of part one', () => {
      const rulesFilePath = 'src/rules.txt';
      const handyHaversacks = new HandyHaversacks(rulesFilePath);
      const bagToSearch = 'shiny gold';

      const bagsContained = handyHaversacks.totalNestedBagsFrom(bagToSearch);

      console.log(bagsContained);
    });
  });
});
