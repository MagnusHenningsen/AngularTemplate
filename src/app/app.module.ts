import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './../components/background/background.component';
import { TextboxComponent } from './../components/textbox/textbox.component';
import { MaskedImagesComponent } from '../components/masked-images/masked-images.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TextboxComponent,
    MaskedImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
