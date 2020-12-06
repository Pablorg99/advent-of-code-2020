import { CustomCustoms } from '../src/CustomCustoms';

describe('CustomCustoms', () => {
  const customCustoms = new CustomCustoms();
  it('should return the number of questions with a yes answer by anyone of the group', () => {
    const group1 = 'a\na\na\n';
    const group2 = 'a\nb\nc\nc\n';
    const group3 = 'ab\nac\n';

    const group1Yes = customCustoms.yesAnsweredQuestionsByAnyoneOf(group1);
    const group2Yes = customCustoms.yesAnsweredQuestionsByAnyoneOf(group2);
    const group3Yes = customCustoms.yesAnsweredQuestionsByAnyoneOf(group3);

    expect(group1Yes).toBe(1);
    expect(group2Yes).toBe(3);
    expect(group3Yes).toBe(3);
  });

  it('should return the sum of the yes answered questions by every group passing a txt', () => {
    const answersFilePath = 'test/answers.test.txt';

    const sumOfYesAnsweredQuestions = customCustoms.sumOfYesAnsweredQuestionsPartOne(answersFilePath);

    expect(sumOfYesAnsweredQuestions).toBe(11);
  });

  it('should return the number of questions with a yes answer by everyone of the group ', () => {
    const group1 = 'abc';
    const group2 = 'a\nb\nc\nc';
    const group3 = 'ab\nac';

    const group1Yes = customCustoms.yesAnsweredQuestionsByEveryoneOf(group1);
    const group2Yes = customCustoms.yesAnsweredQuestionsByEveryoneOf(group2);
    const group3Yes = customCustoms.yesAnsweredQuestionsByEveryoneOf(group3);

    expect(group1Yes).toBe(3);
    expect(group2Yes).toBe(0);
    expect(group3Yes).toBe(1);
  });

  it('should return the sum of the yes answered questions by everyone for every group passing a txt', () => {
    const answersFilePath = 'test/answers.test.txt';

    const sumOfYesAnsweredQuestions = customCustoms.sumOfYesAnsweredQuestionsPartTwo(answersFilePath);

    expect(sumOfYesAnsweredQuestions).toBe(6);
  });

  describe('solutions', () => {
    it('should print the solution for part one', () => {
      const answersFilePath = 'src/answers.txt';

      const sumOfYesAnsweredQuestions = customCustoms.sumOfYesAnsweredQuestionsPartOne(answersFilePath);

      console.log(sumOfYesAnsweredQuestions);
    });

    it('should print the solution for part two', () => {
      const answersFilePath = 'src/answers.txt';

      const sumOfYesAnsweredQuestions = customCustoms.sumOfYesAnsweredQuestionsPartTwo(answersFilePath);

      console.log(sumOfYesAnsweredQuestions);
    });
  });
});
