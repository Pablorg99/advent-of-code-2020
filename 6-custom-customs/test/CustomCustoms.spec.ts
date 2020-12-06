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

    const sumOfYesAnsweredQuestions = customCustoms.sumOfYesAnsweredQuestionsBy(answersFilePath);

    expect(sumOfYesAnsweredQuestions).toBe(11);
  });

  describe('solutions', () => {
    it('should print the solution for part one', () => {
      const answersFilePath = 'src/answers.txt';

      const sumOfYesAnsweredQuestions = customCustoms.sumOfYesAnsweredQuestionsBy(answersFilePath);

      console.log(sumOfYesAnsweredQuestions);
    });
  });
});
