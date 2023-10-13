import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  @Input() description_list : string[] = [];
  @Input() disabled : boolean = false;
  @Output() values_event = new EventEmitter<Array<number>>();

  text_button : string = 'Calcular';
  values : number[] = [];
  inputs : string[] = ['', ''];

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  sendValues(number_form : any){
    if(number_form.valid && !this.disabled){
      this.changeText();
      this.values_event.emit(this.values);
    } else if(this.disabled){
      this.changeText();
      this.values_event.emit(this.values);
      this.values = [];
    } else{
      this.toastr.success('Llena todos los campos', 'MathCode', {
        timeOut: 3000
      });
    }
  }

  changeText(){
    this.text_button = this.disabled ? 'Calcular' : 'Limpiar';
  }

  addInput(){
    this.inputs.push('');
  }

  deleteInput(){
    this.inputs.pop();
    this.values.pop();
  }

  /*Pendiente documentar validación de formularios*/
}
