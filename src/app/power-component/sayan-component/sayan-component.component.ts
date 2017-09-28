import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sayan-component',
  templateUrl: './sayan-component.component.html',
  styleUrls: ['./sayan-component.component.css']
})
export class SayanComponentComponent implements OnInit {

  @Input() powerlevel;
  @Input() powermessage;

  constructor() { }

  ngOnInit() {
  }

}
