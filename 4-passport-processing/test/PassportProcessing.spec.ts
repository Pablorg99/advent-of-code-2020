import { PassportProcessing } from '../src/PassportProcessing';

describe('PassportProcessing', () => {
  it('should return 2 valid passports for test_passports.txt', () => {
    const passportProcessing = new PassportProcessing();
    const passportsFilePath = 'test/test_passports.txt';

    const validPassports = passportProcessing.partOneValidPassportsOf(passportsFilePath);

    expect(validPassports).toBe(2);
  });

  it('should return 4 valid passports for test_passports_2.txt', () => {
    const passportProcessing = new PassportProcessing();
    const passportsFilePath = 'test/test_passports_2.txt';

    const validPassports = passportProcessing.partTwoValidPassportsOf(passportsFilePath);

    expect(validPassports).toBe(4);
  });

  describe('solutions', () => {
    it('should print the solution for part one (valid passports in passports.txt)', () => {
      const passportProcessing = new PassportProcessing();
      const passportsFilePath = 'src/passports.txt';

      const validPassports = passportProcessing.partOneValidPassportsOf(passportsFilePath);

      console.log(validPassports);
    });

    it('should print the solution for part two (valid passports and fields in passports.txt)', () => {
      const passportProcessing = new PassportProcessing();
      const passportsFilePath = 'src/passports.txt';

      const validPassports = passportProcessing.partTwoValidPassportsOf(passportsFilePath);

      console.log(validPassports);
    });
  });
});
