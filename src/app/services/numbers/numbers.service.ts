import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NumberObjType, getStartNumbers } from '../../mocks/number.mock';
@Injectable({
  providedIn: 'root'
})
export class NumbersService {


  private numbersSource = new BehaviorSubject(getStartNumbers());

  currentNumbersArray = this.numbersSource.asObservable();

  constructor() { }

  changeSelectedNumber(modObj: NumberObjType, index: number) {

    const modNumberArray = this.numbersSource.getValue();
    modNumberArray[index] = modObj;
    this.numbersSource.next(modNumberArray);
    console.log("value modified");
    console.log(this.numbersSource.getValue())
  }
}
