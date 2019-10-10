import { Component, OnInit, Input } from '@angular/core';
import { QuestionObjType } from '../../mocks/question.mock';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent implements OnInit {

  @Input() Question: QuestionObjType;
  @Input() TimeLeft: number;

  constructor() { }

  ngOnInit() {
  }

  getTimeLeft() {
    return this.TimeLeft;
  }

}
