import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  funcT: string = '';
  previousNumber: string = '';
  currentNumber: string = '';
  isAfterEqual: boolean = false;

  constructor() {
    this.currentNumber = "0"
  }

  onClear() {
    this.funcT = '';
    this.previousNumber = '';
    this.currentNumber = '0';
  }

  onNumberClick(val: string) {
    if (this.isAfterEqual) {
      this.currentNumber = '0';
      this.isAfterEqual = false;
    }

    if (this.currentNumber.length > 9) {
      return;
    }
    if (this.currentNumber === "0") {
      this.currentNumber = val;
    }
    else {
      this.currentNumber = this.currentNumber + val;
    }
  }

  onEqual() {
    if (this.previousNumber !== '') {
      this.isAfterEqual = true;
      let wynik: number = 0;
      if (this.funcT === '+') {
        wynik = Number(this.previousNumber) + Number(this.currentNumber);
      }
      else if (this.funcT === '-') {
        wynik = Number(this.previousNumber) - Number(this.currentNumber);
      }
      else if (this.funcT === '*') {
        wynik = Number(this.previousNumber) * Number(this.currentNumber);
      }
      else if (this.funcT === '/') {
        wynik = Number(this.previousNumber) / Number(this.currentNumber);
      }
      this.funcT = '';
      this.previousNumber = '';
      this.currentNumber = wynik.toString();
    }
  }

  onFunctionClick(val: string) {
    if (val === '+') {
      this.funcT = '+';
      this.onEqual();
      this.funcT = '+';
    }
    if (val === '-') {
      this.funcT = '-';
      this.onEqual();
      this.funcT = '-';
    }
    if (val === '*') {
      this.funcT = '*';
      this.onEqual();
      this.funcT = '*';
    }
    if (val === '/') {
      this.funcT = '/';
      this.onEqual();
      this.funcT = '/';
    }

    this.previousNumber = this.currentNumber;
    this.currentNumber = '0';
  }
}
