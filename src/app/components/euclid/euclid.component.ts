import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euclid',
  templateUrl: './euclid.component.html',
  styleUrls: ['./euclid.component.css']
})
export class EuclidComponent implements OnInit {
  dividend : number = 1;
  divisor : number = 1;
  quotient : number = 1;
  remainder : number = 1;
  show_result : boolean = false;

  remainer_list : number[] = [];
  quotient_list : number[] = [];
  number_list : number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  division(){
    this.quotient = Math.floor(this.dividend / this.divisor);
    this.remainder = this.dividend % this.divisor;   
    this.show_result = !this.show_result; 
  }

  algorithm(){
    let dividend = this.dividend;
    let divisor = this.divisor;
    this.reloadValues();

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
    this.number_list.forEach(n => console.log(n));
  }

  reloadValues(){
    this.remainer_list = [];
    this.quotient_list = [];
    this.number_list = [];
    this.remainder = 1;
  }
}
