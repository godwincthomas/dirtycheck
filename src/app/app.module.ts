import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { SampleForm2Component } from './sample-form2/sample-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent,
    SampleForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
