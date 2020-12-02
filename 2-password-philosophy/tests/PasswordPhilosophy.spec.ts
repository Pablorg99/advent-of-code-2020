import { PasswordPhilosophy } from "../src/PasswordPhilosophy";

describe("PasswordPhilosophy", () => {
  it("should return 2 valid passwords for the password_test.txt", () => {
    const passwordPhilosophy = new PasswordPhilosophy();
    const passwordFilePath = "tests/passwords_test.txt";

    const validPasswords = passwordPhilosophy.validPasswordsForFilePartOne(passwordFilePath);

    expect(validPasswords).toBe(2);
  });

  it("should return 1 valid passwords for the password_test.txt", () => {
    const passwordPhilosophy = new PasswordPhilosophy();
    const passwordFilePath = "tests/passwords_test.txt";

    const validPasswords = passwordPhilosophy.validPasswordsForFilePartTwo(passwordFilePath);

    expect(validPasswords).toBe(1);
  });

  describe("solutions", () => {
    it("should print the solution for part one", () => {
      const passwordPhilosophy = new PasswordPhilosophy();
      const passwordFilePath = "src/passwords.txt";

      const validPasswords = passwordPhilosophy.validPasswordsForFilePartOne(passwordFilePath);

      console.log(validPasswords);
    });

    it("should print the solution for part two", () => {
      const passwordPhilosophy = new PasswordPhilosophy();
      const passwordFilePath = "src/passwords.txt";

      const validPasswords = passwordPhilosophy.validPasswordsForFilePartTwo(passwordFilePath);

      console.log(validPasswords);
    });
  });
});
