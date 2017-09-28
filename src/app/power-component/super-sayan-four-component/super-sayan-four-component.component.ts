import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-sayan-four-component',
  templateUrl: './super-sayan-four-component.component.html',
  styleUrls: ['./super-sayan-four-component.component.css']
})
export class SuperSayanFourComponentComponent implements OnInit {

  @Input() powerlevel;
  @Input() powermessage;

  constructor() { }

  ngOnInit() {
  }

}
