import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NimbleBannerModule, NimbleButtonModule, NimbleDrawerModule } from '@ni/nimble-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MbscModule,
    FormsModule,
    BrowserModule,
    NimbleBannerModule,
    NimbleButtonModule,
    NimbleDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
