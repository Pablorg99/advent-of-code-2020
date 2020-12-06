import * as fs from 'fs';

export class CustomCustoms {
  sumOfYesAnsweredQuestionsPartTwo(answersFilePath: string) {
    let yesAnsweredQuestions = 0;
    const answersOfAllGroups = fs.readFileSync(answersFilePath).toString();
    for (const groupAnswers of answersOfAllGroups.split('\n\n')) {
      yesAnsweredQuestions += this.yesAnsweredQuestionsByEveryoneOf(groupAnswers);
    }
    return yesAnsweredQuestions;
  }

  yesAnsweredQuestionsByEveryoneOf(groupAnswers: string) {
    let yesAnsweredQuestionsByEveryone = 0;
    let yesAnswersOfFirstMember = groupAnswers.split('\n')[0];
    const numberOfMembers = groupAnswers.split('\n').length;
    for (const yesAnswerOfFirstMember of yesAnswersOfFirstMember) {
      const answerToSearch = new RegExp(yesAnswerOfFirstMember, 'g');
      const numberOfMatchingAnswers = (groupAnswers.match(answerToSearch) || []).length;
      if (numberOfMatchingAnswers === numberOfMembers) {
        yesAnsweredQuestionsByEveryone++;
      }
    }
    return yesAnsweredQuestionsByEveryone;
  }

  sumOfYesAnsweredQuestionsPartOne(answersFilePath: string) {
    let yesAnsweredQuestions = 0;
    const answersOfAllGroups = fs.readFileSync(answersFilePath).toString();
    for (const groupAnswers of answersOfAllGroups.split('\n\n')) {
      yesAnsweredQuestions += this.yesAnsweredQuestionsByAnyoneOf(groupAnswers);
    }
    return yesAnsweredQuestions;
  }

  yesAnsweredQuestionsByAnyoneOf(groupAnswers: string) {
    let yesAnsweredQuestionsByAnyone: string[] = [];
    for (const personAnswers of groupAnswers.split('\n')) {
      for (const answer of personAnswers.split('')) {
        if (!yesAnsweredQuestionsByAnyone.includes(answer)) {
          yesAnsweredQuestionsByAnyone.push(answer);
        }
      }
    }
    return yesAnsweredQuestionsByAnyone.length;
  }
}
