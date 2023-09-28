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
  show_result : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  division(){
    this.quotient = Math.floor(this.dividend / this.divisor);
    this.remainder = this.dividend % this.divisor;   
    this.show_result = !this.show_result; 
  }
}
