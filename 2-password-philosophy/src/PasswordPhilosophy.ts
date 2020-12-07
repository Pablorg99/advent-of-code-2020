import * as fs from "fs";

export class PasswordPhilosophy {
  validPasswordsForFilePartOne(passwordFilePath: string) {
    let validPasswords = 0;
    const fileContent = fs.readFileSync(passwordFilePath).toString();
    for (const line of fileContent.split("\n")) {
      const matches = line.match(/([0-9]*)-([0-9]*) ([a-z]): (.*)/);
      const minimum = parseInt(matches[1]);
      const maximum = parseInt(matches[2]);
      const character = matches[3];
      const password = matches[4];
      if (this.isValidPasswordForPartOne({ minimum, maximum, character, password })) {
        validPasswords++;
      }
    }
    return validPasswords;
  }

  private isValidPasswordForPartOne(params: { minimum: number; maximum: number; character: string; password: string }) {
    const { minimum, maximum, character, password } = params;
    const characterToMatchExpression = new RegExp(character, "g");
    const characterMatches = (password.match(characterToMatchExpression) || []).length;
    if (characterMatches >= minimum && characterMatches <= maximum) {
      return true;
    }
    return false;
  }

  validPasswordsForFilePartTwo(passwordFilePath: string) {
    let validPasswords = 0;
    const fileContent = fs.readFileSync(passwordFilePath).toString();
    for (const line of fileContent.split("\n")) {
      const matches = line.match(/([0-9]*)-([0-9]*) ([a-z]): (.*)/);
      const firstPosition = parseInt(matches[1]);
      const secondPosition = parseInt(matches[2]);
      const character = matches[3];
      const password = matches[4];
      if (this.isValidPasswordForPartTwo({ firstPosition, secondPosition, character, password })) {
        validPasswords++;
      }
    }
    return validPasswords;
  }

  private isValidPasswordForPartTwo(params: {
    firstPosition: number;
    secondPosition: number;
    character: string;
    password: string;
  }) {
    const { firstPosition, secondPosition, character, password } = params;
    let characterMatches = 0;

    if (password[firstPosition - 1] === character) {
      characterMatches++;
    }

    if (password[secondPosition - 1] === character) {
      characterMatches++;
    }

    if (characterMatches === 1) {
      return true;
    }

    return false;
  }
}
