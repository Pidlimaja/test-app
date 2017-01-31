import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PolaroidComponent } from './polaroid/polaroid.component';
import { ModalComponent } from './polaroid/modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PolaroidComponent,
    ModalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
