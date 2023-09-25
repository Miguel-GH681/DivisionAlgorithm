import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationComponent } from './components/operation/operation.component';
import { FormsModule } from '@angular/forms';
import { PartsComponent } from './components/parts/parts.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    PartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
