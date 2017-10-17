import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-component',
  templateUrl: './human-component.component.html',
  styleUrls: ['./human-component.component.css']
})
export class HumanComponentComponent implements OnInit {

  @Input() powerlevel;
  @Input() powermessage;
  
  constructor() { }

  ngOnInit() {
  }

}
