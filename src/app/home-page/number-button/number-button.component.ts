import { Component, OnInit } from '@angular/core';
import { NumberObjType } from '../../mocks/number.mock';
import { NumbersService } from '../../services/numbers/numbers.service';
@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.scss']
})
export class NumberButtonComponent implements OnInit {


  numbers: Array<NumberObjType>;

  // tslint:disable-next-line: variable-name
  constructor(private numbers_: NumbersService) { }

  ngOnInit() {
    this.numbers_.currentNumbersArray.subscribe(numberArray => this.numbers = numberArray);
  }



  numberSelected(numberSelected: any, index: number) {

    const modObj = numberSelected;
    modObj.selected = !modObj.selected;

    this.numbers_.changeSelectedNumber(modObj, index);
  }

}
