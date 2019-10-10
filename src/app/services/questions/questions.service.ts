import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionObjType } from '../../mocks/question.mock';
import { NumberObjType } from '../../mocks/number.mock';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionsSource = new BehaviorSubject([]);
  private questionSource = new BehaviorSubject({
    question: '',
    result: undefined,
    id: ''
  });
  private TimeLeftSource = new BehaviorSubject(0);

  currentArrayOfQuestions = this.questionsSource.asObservable();
  currentQuestion = this.questionSource.asObservable();
  currentTimeLeft = this.TimeLeftSource.asObservable();
  constructor() { }

  generateQuestions(numbers) {
    const valuesMult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numberOfQuestions = 15;

    const newQuestionArray: Array<QuestionObjType> = [];

    for (let i = 0, j = 0; i < numberOfQuestions; i++ , j++) {
      const randomNumber = valuesMult[Math.floor(Math.random() * valuesMult.length)];
      const newQuestionObj = {
        question: String(numbers[j].value + ' x ' + randomNumber + ' ='),
        result: numbers[j].value * randomNumber,
        id: this.getNewUUID()
      };
      if (j < 10) { j = 0; }
      newQuestionArray.push(newQuestionObj);
    }
    this.questionsSource.next(newQuestionArray);
    this.startQuestioning(this.questionsSource.getValue());
  }

  startQuestioning(questions: Array<QuestionObjType>) {
    let i = 0;
    /* FIRST QUESTION IS RAPID */
    this.nextQuestion(questions[i]);
    i++;
    let startTime = new Date();
    const maxTime = 9; // max time X answer in seconds

    /* timer take time elapsed */
    const timerView = setInterval(() => {
      const secondsPassed = this.updateTimeView(startTime);
      if (secondsPassed === maxTime) {
        startTime = new Date();
        if (i === (questions.length - 1)) {
          clearInterval(timerView);
        }
        this.nextQuestion(questions[i]);
        i++;
      }
    }, 100);





  }

  updateTimeView(startTime: any) {
    const endTime: any = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    const secondsPassed = Math.round(timeDiff);
    console.log("timePassed: " + secondsPassed);
    this.TimeLeftSource.next(secondsPassed);
    return secondsPassed;
  }

  nextQuestion(question: QuestionObjType) {
    console.log('NEW QUESTION COMING: ');
    console.log(question);
    this.questionSource.next(question);
  }

  changeAnswer(questionId: string, answear: number) {

  }

  getNewUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /*   changeSelectedNumber(modObj: NumberObjType, index: number) {
  
      const modNumberArray = this.numbersSource.getValue();
      modNumberArray[index] = modObj;
      this.numbersSource.next(modNumberArray);
      console.log("value modified");
      console.log(this.numbersSource.getValue())
    } */
}
