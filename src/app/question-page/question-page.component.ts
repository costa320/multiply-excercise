import { Component, OnInit } from '@angular/core';
import { NumberObjType } from '../mocks/number.mock';
import { QuestionObjType } from '../mocks/question.mock';
import { NumbersService } from '../services/numbers/numbers.service';
import { QuestionsService } from '../services/questions/questions.service';
@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  numbers: Array<NumberObjType>;
  questions: Array<QuestionObjType>;
  currentQuestion: QuestionObjType;
  currentTimeLeft: number;

  constructor(private numbers_: NumbersService, private questions_: QuestionsService) { }

  ngOnInit() {
    this.numbers_.currentNumbersArray.subscribe(numberArray => this.numbers = numberArray);
    this.questions_.currentArrayOfQuestions.subscribe(questionsArray => this.questions = questionsArray);
    this.questions_.currentQuestion.subscribe(question => this.currentQuestion = question);
    this.questions_.currentTimeLeft.subscribe(timeLeft => this.currentTimeLeft = timeLeft);


    this.questions_.generateQuestions(this.numbers);
    console.log(this.questions);
  }

}
