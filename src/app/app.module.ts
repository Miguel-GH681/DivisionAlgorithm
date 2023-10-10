import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationComponent } from './components/operation/operation.component';
import { FormsModule } from '@angular/forms';
import { PartsComponent } from './components/parts/parts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { EuclidComponent } from './components/euclid/euclid.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    PartsComponent,
    NavbarComponent,
    CardComponent,
    EuclidComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
