import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UnlessModule } from './unless/unless.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnlessModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
