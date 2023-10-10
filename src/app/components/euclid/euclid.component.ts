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

  remainer_list : number[] = [];
  quotient_list : number[] = [];
  number_list : number[] = [];
  description_list : string[] = ['Valor Uno', 'Valor Dos'];

  constructor() { }

  ngOnInit(): void {
  }

  algorithm(values : number[]){    
    let dividend = values[0];
    let divisor = values[1];
    this.reloadValues(dividend);
    this.showResult();

    for(let i = 0; this.remainder != 0; i++){
      this.remainer_list[i] = dividend % divisor;
      this.remainder = dividend % divisor;
      this.quotient_list[i] = (dividend - this.remainder) / divisor;
      this.number_list[i] = divisor;
      if(this.remainder != 0){
        dividend = divisor;
        divisor = this.remainder
      }
    }
  }

  reloadValues(dividend : number){
    this.remainer_list = [];
    this.quotient_list = [];
    this.number_list = [];
    this.remainder = 1;
    this.dividend = dividend;
  }

  showResult(){
    this.show_result = !this.show_result;
  }
}
