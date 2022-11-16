import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexStartComponent } from './components/index-start/index-start.component';
import { ExercicesListComponent } from './components/exercices-list/exercices-list.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexStartComponent,
    ExercicesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
