import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euclid',
  templateUrl: './euclid.component.html',
  styleUrls: ['./euclid.component.css']
})
export class EuclidComponent implements OnInit {
  dividend : number = 1;
  divisor : number = 1;
  remainder : number = 1;
  show_result : boolean = false;

  remainers : [number[]] = [[]];
  quotients : [number[]] = [[]];
  numbers : [number[]] = [[]];
  dividends : number[] = [];
  first_result? : number = undefined;

  tables : string[] = [];
  descriptions : string[] = ['Valor Uno', 'Valor Dos'];

  constructor() { }

  ngOnInit(): void {
  }

  algorithm(values : number[]){    
    let dividend;
    let divisor;
    
    if(!this.show_result){
      this.matrixConfiguration(values.length);
      for(let i = 0; i < this.tables.length; i++){
        dividend = values[this.indexConfiguration(i)];
        divisor = this.first_result ?? values[i+1];
        this.remainder = 1;
  
        for(let j = 0; this.remainder != 0; j++){
          this.remainers[i][j] = dividend % divisor;
          this.remainder = dividend % divisor;
          this.quotients[i][j] = (dividend - this.remainder) / divisor;
          this.numbers[i][j] = divisor;
          if(this.remainder != 0){
            dividend = divisor;
            divisor = this.remainder;
          } else{
            this.first_result = this.numbers[i][j];
            this.dividends[i] = values[this.indexConfiguration(i)]; 
          }
        }
      }

      this.showResult();
    } else{
      this.reloadValues();
    }
  }

  matrixConfiguration(size : number){
    for(let i = 0; i < (size-1); i++ ){
      this.tables.push('');
      this.remainers[i] = [];
      this.numbers[i] = [];
      this.quotients[i] = [];
    }
  }

  indexConfiguration(i : number){
    return (i == 0) ? 0 : i+1;
  }

  reloadValues(){
    this.remainers = [[]];
    this.quotients = [[]];
    this.numbers = [[]];
    this.tables = [];
    this.remainder = 1;
    this.first_result = undefined;
    this.showResult();
  }

  showResult(){
    this.show_result = !this.show_result;
  }
}
