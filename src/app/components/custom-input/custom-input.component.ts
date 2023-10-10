import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  @Input() description_list : string[] = [];
  @Input() disabled : boolean = false;
  @Output() values_event = new EventEmitter<Array<number>>();
  first_value : number = 1;
  second_value : number = 1;
  text_button : string = 'Calcular';
  values_list : number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getValues(){
    this.values_list[0] = this.first_value;
    this.values_list[1] = this.second_value;
  }

  changeText(){
    this.text_button = this.disabled ? 'Calcular' : 'Limpiar';
  }

  sendValues(){
    this.getValues();
    this.changeText();
    this.values_event.emit(this.values_list);
  }
}
