import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-sayan-three-component',
  templateUrl: './super-sayan-three-component.component.html',
  styleUrls: ['./super-sayan-three-component.component.css']
})
export class SuperSayanThreeComponentComponent implements OnInit {

  @Input() powerlevel;
  @Input() powermessage;

  constructor() { }

  ngOnInit() {
  }

}
