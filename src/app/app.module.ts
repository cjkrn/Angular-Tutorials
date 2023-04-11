import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

import { CourseMainComponent } from './course-main/course-main.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';



@NgModule({
  declarations: [
    AppComponent, 
   Assignment2Component, Assignment3Component, CourseMainComponent, ServerElementComponent, CockpitComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
