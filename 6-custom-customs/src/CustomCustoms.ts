import * as fs from 'fs';

export class CustomCustoms {
  sumOfYesAnsweredQuestionsBy(answersFilePath: string) {
    let yesAnsweredQuestions = 0;
    const answersOfAllGroups = fs.readFileSync(answersFilePath).toString();
    for (const groupAnswers of answersOfAllGroups.split('\n\n')) {
      yesAnsweredQuestions += this.yesAnsweredQuestionsByAnyoneOf(groupAnswers);
    }
    return yesAnsweredQuestions;
  }

  yesAnsweredQuestionsByAnyoneOf(groupAnswers: string) {
    let yesAnsweredQuestions: string[] = [];
    for (const personAnswers of groupAnswers.split('\n')) {
      for (const answer of personAnswers.split('')) {
        if (!yesAnsweredQuestions.includes(answer)) {
          yesAnsweredQuestions.push(answer);
        }
      }
    }
    return yesAnsweredQuestions.length;
  }
}
