import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-sayan-component',
  templateUrl: './super-sayan-component.component.html',
  styleUrls: ['./super-sayan-component.component.css']
})
export class SuperSayanComponentComponent implements OnInit {

  @Input() powerlevel;
  @Input() powermessage;

  constructor() { }

  ngOnInit() {
  }

}
