import * as fs from "fs";

export class PasswordPhilosophy {
  validPasswordsForFilePartOne(passwordFilePath: string) {
    let validPasswords = 0;
    const fileContent = fs.readFileSync(passwordFilePath).toString();
    for (const line of fileContent.split("\n")) {
      const minimum = parseInt(line.split("-")[0]);
      const maximum = parseInt(line.split("-")[1].split(" ")[0]);
      const character = line.split(" ")[1][0];
      const password = line.split(" ")[2];
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
      const firstPosition = parseInt(line.split("-")[0]);
      const secondPosition = parseInt(line.split("-")[1].split(" ")[0]);
      const character = line.split(" ")[1][0];
      const password = line.split(" ")[2];
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
