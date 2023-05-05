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
import { Assignment4Component } from './assignment4/assignment4.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';



@NgModule({
  declarations: [
    AppComponent, 
   Assignment2Component, Assignment3Component, CourseMainComponent, ServerElementComponent, CockpitComponent, Assignment4Component, OddComponent, EvenComponent, Assignment5Component, ActiveUsersComponent, InactiveUsersComponent, 
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
