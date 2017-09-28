import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponentComponent } from './power-component/power-component.component';
import { HumanComponentComponent } from './power-component/human-component/human-component.component';
import { SayanComponentComponent } from './power-component/sayan-component/sayan-component.component';
import { SuperSayanComponentComponent } from './power-component/super-sayan-component/super-sayan-component.component';
import { SuperSayanTwoComponentComponent } from './power-component/super-sayan-two-component/super-sayan-two-component.component';
import { SuperSayanThreeComponentComponent } from './power-component/super-sayan-three-component/super-sayan-three-component.component';
import { SuperSayanFourComponentComponent } from './power-component/super-sayan-four-component/super-sayan-four-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponentComponent,
    HumanComponentComponent,
    SayanComponentComponent,
    SuperSayanComponentComponent,
    SuperSayanTwoComponentComponent,
    SuperSayanThreeComponentComponent,
    SuperSayanFourComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
