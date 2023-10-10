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
  button_text : string = 'Calcular';
  description_list: string[] = ['Dividendo', 'Divisor'];

  constructor() { }

  ngOnInit(): void {
  }

  division(values : number[]){
    this.dividend = values[0];
    this.divisor = values[1];
    
    this.quotient = Math.floor(this.dividend / this.divisor);
    this.remainder = this.dividend % this.divisor;   
    this.show_result = !this.show_result;
    this.button_text = this.show_result ? 'Limpiar' : 'Calcular';
  }
}
