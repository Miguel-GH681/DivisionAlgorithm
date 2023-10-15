import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EuclidComponent } from './components/euclid/euclid.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { TeoryComponent } from './components/teory/teory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EuclidComponent,
    CustomInputComponent,
    TeoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
