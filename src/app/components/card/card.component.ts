import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title : string = "";
  @Input() description : string = "";
  @Input() color : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(){
    return {
      'width': '25px',
      'height': '25px',
      'background-color': this.color,
      'border-radius': '100%'
    }
  }

}
