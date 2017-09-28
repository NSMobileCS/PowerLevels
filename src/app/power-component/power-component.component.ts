import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {

  currentPowerLevel = 25;
  newPowerLevel = 25;
  powerLevels = [
        {score: 9000, messageString:"Over 9000!"},
        {score: 20000, messageString:"Superlative!"},
        {score: 50000, messageString:"The One!"}
  ];

  getLevelMessage = (sayanMultiplier) => { 
                    var powerlevel = this.currentPowerLevel * sayanMultiplier;
                    var message = '';
                    for (let level of this.powerLevels){
                      if (powerlevel >= level.score){
                        message = level.messageString;
                      }
                    }
                    return message;
                  }

  updatePowLev = () => this.currentPowerLevel = this.newPowerLevel;

  constructor() { }

  ngOnInit() {
  }

}
