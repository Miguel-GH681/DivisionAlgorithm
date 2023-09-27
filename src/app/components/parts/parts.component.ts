import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  divisor_description : string = 'Es la cantidad de partes en las que se va a dividir un número.';
  remainder_description : string = 'Es el número que sobra de la división, es decir, la parte que no se ha podido distribuir.';
  quotient_description : string = 'Es el total de partes en las que se dividió el dividendo.';
  dividend_description : string = 'Es el número que se va a dividir.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
