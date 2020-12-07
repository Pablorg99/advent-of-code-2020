import * as fs from 'fs';

export class HandyHaversacks {
  private bagsMap = new Map<string, Map<string, number>>();
  private numberOfNestedBags = 1;

  constructor(rulesFilePath: string) {
    const rules = fs.readFileSync(rulesFilePath).toString();
    for (const rule of rules.split('\n')) {
      const container = rule.split(' bags contain ')[0];
      const bagsContainedMap = this.getBagsContainedMap(rule.split(' bags contain ')[1]);
      this.bagsMap.set(container, bagsContainedMap);
    }
  }

  private getBagsContainedMap(containedBags: string) {
    let bagsContainedMap = new Map<string, number>();
    for (const bagContained of containedBags.split(',')) {
      if (bagContained.includes('no other bags')) {
        bagsContainedMap.set('none', 0);
        continue;
      }
      const number = parseInt(bagContained.match(/\d/g).toString());
      const bagColor = bagContained.replace(/(\d )|( bags.)|( bag.)|( bags)|( bag)/g, '').trim();
      bagsContainedMap.set(bagColor, number);
    }
    return bagsContainedMap;
  }

  totalNestedBagsFrom(parentBag: string): number {
    if (this.bagsMap.get(parentBag).has('none')) {
      return 0;
    }

    let totalBags = 0;
    for (const [bagColor, number] of this.bagsMap.get(parentBag)) {
      totalBags += number + number * this.totalNestedBagsFrom(bagColor);
    }
    return totalBags;
  }

  numberOfContainersFor(bagToSearch: string) {
    let containerBags = [bagToSearch];
    for (const bag of containerBags) {
      const containers = this.containersOf(bag);
      if (containers) {
        for (const container of containers) {
          if (!containerBags.includes(container)) {
            containerBags.push(container);
          }
        }
      }
    }
    return containerBags.length - 1;
  }

  private containersOf(bag: string) {
    let containers: Array<string> = [];
    this.bagsMap.forEach((containedBags, container) => {
      if (containedBags.has(bag)) {
        containers.push(container);
      }
    });
    return containers;
  }
}
