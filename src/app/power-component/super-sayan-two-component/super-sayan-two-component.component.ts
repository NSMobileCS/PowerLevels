import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-sayan-two-component',
  templateUrl: './super-sayan-two-component.component.html',
  styleUrls: ['./super-sayan-two-component.component.css']
})
export class SuperSayanTwoComponentComponent implements OnInit {

  @Input() powerlevel;
  @Input() powermessage;

  constructor() { }

  ngOnInit() {
  }

}
