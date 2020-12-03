import { TobogganTrajectory } from '../src/TobogganTrajectory';

describe('TobogganTrajectory', () => {
  it('should return 7 trees for the test_area.txt', () => {
    const tobogganTrajectory = new TobogganTrajectory();
    const areaFilePath = 'test/area_test.txt';

    const trees = tobogganTrajectory.getTreesOnArea(areaFilePath);

    expect(trees).toBe(7);
  });

  it('should return 336 for the test_area.txt', () => {
    const tobogganTrajectory = new TobogganTrajectory();
    const areaFilePath = 'test/area_test.txt';
    const slopesFilePath = 'src/slopes.txt';

    const trees = tobogganTrajectory.getTreesOnAreaWithSlopes(areaFilePath, slopesFilePath);

    expect(trees).toBe(336);
  });

  describe('solutions', () => {
    it('should print the solution for part one', () => {
      const tobogganTrajectory = new TobogganTrajectory();
      const areaFilePath = 'src/area.txt';

      const trees = tobogganTrajectory.getTreesOnArea(areaFilePath);

      console.log(trees);
    });

    it('should print the solution for part two', () => {
      const tobogganTrajectory = new TobogganTrajectory();
      const areaFilePath = 'src/area.txt';
      const slopesFilePath = 'src/slopes.txt';

      const trees = tobogganTrajectory.getTreesOnAreaWithSlopes(areaFilePath, slopesFilePath);

      console.log(trees);
    });
  });
});
