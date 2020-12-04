import * as fs from 'fs';

export class PassportProcessing {
  partOneValidPassportsOf(passportsFilePath: string) {
    let validPassports = 0;
    const fileContent = fs.readFileSync(passportsFilePath).toString();
    for (const passport of fileContent.split('\n\n')) {
      if (this.hasAllMandatoryFields(passport)) {
        validPassports++;
      }
    }
    return validPassports;
  }

  partTwoValidPassportsOf(passportsFilePath: string) {
    let validPassports = 0;
    const fileContent = fs.readFileSync(passportsFilePath).toString();
    for (const passport of fileContent.split('\n\n')) {
      if (this.hasAllMandatoryFields(passport) && this.allFieldsAreValid(passport)) {
        validPassports++;
      }
    }
    return validPassports;
  }

  private hasAllMandatoryFields(passport: string) {
    if (
      passport.includes('byr') &&
      passport.includes('iyr') &&
      passport.includes('eyr') &&
      passport.includes('hgt') &&
      passport.includes('hcl') &&
      passport.includes('ecl') &&
      passport.includes('pid')
    ) {
      return true;
    }
    return false;
  }

  private allFieldsAreValid(passport: string) {
    const newLines = new RegExp('\n', 'g');
    const oneLinePassport = passport.replace(newLines, ' ');
    for (const keyValuePair of oneLinePassport.split(' ')) {
      const key = keyValuePair.split(':')[0];
      const value = keyValuePair.split(':')[1];
      if (!this.valid(key, value)) {
        return false;
      }
    }
    return true;
  }

  valid(key: string, value: string) {
    switch (key) {
      case 'byr':
        return this.validByr(value);

      case 'iyr':
        return this.validIyr(value);

      case 'eyr':
        return this.validEyr(value);

      case 'hgt':
        return this.validHgt(value);

      case 'hcl':
        return this.validHcl(value);

      case 'ecl':
        return this.validEcl(value);

      case 'pid':
        return this.validPid(value);

      default:
        return true;
    }
  }

  private validByr(value: string) {
    const year = parseInt(value);
    if (year >= 1920 && year <= 2002) {
      return true;
    }
    return false;
  }

  private validIyr(value: string) {
    const year = parseInt(value);
    if (year >= 2010 && year <= 2020) {
      return true;
    }
    return false;
  }

  private validEyr(value: string) {
    const year = parseInt(value);
    if (year >= 2020 && year <= 2030) {
      return true;
    }
    return false;
  }

  private validHcl(value: string) {
    return /^#[a-f0-9]{6}$/.test(value);
  }

  private validEcl(value: string) {
    const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    if (validColors.includes(value)) {
      return true;
    }
    return false;
  }

  private validPid(value: string) {
    return /^[0-9]{9}$/.test(value);
  }

  private validHgt(value: string) {
    if (value.includes('cm')) {
      const heightInCm = parseInt(value.replace('cm', ''));
      if (heightInCm >= 150 && heightInCm <= 193) {
        return true;
      }
      return false;
    }

    if (value.includes('in')) {
      const heightInInches = parseInt(value.replace('in', ''));
      if (heightInInches >= 59 && heightInInches <= 76) {
        return true;
      }
      return false;
    }

    return false;
  }
}
