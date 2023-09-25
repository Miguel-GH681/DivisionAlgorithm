import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  dividend : number = 1;
  divisor : number = 1;
  quotient : number = 1;
  remainder : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  division(){
    this.quotient = this.dividend / this.divisor;
    this.remainder = this.dividend % this.divisor;
    console.log('el resultado es: ' + Math.floor(this.quotient));
    console.log('el residuo es: ' + this.remainder);

  }
}
