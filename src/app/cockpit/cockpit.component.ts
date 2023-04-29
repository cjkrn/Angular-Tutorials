import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // EventEmit :- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#announcements
  @Output() serverCreated = new EventEmitter< {serverName: string, serverContent: string}>();  // () to call the constr of EventEmitter
  @Output('bpCreated') blueprintCreated = new EventEmitter< {serverName: string, serverContent: string}>();  // () to call the constr of EventEmitter

  newServerName = ''
  // newServerContent =''
  // https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656094#notes
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  constructor(){}
  ngOnInit(){}

  // // Using ngModel
  // onAddServer(){
  // // EventEmit :- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#announcement
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  // }
  
  // Using Local Reference:- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656092#overview
  onAddServer(LocalReferenceName: HTMLInputElement){
    // EventEmit :- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#announcement
      console.log("Local Reference Value is the Whole Input:-", LocalReferenceName)

      this.serverCreated.emit({
        serverName: LocalReferenceName.value, 
        serverContent: this.serverContentInput.nativeElement.value
      });
    }
  onAddBlueprint(nameInput: HTMLInputElement){

  // EventEmit :- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#announcements
  // Dont access DOM using ViewChild like this:- 
  // this.serverContentInput.nativeElement.value = 'Default'; 
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value // Getting the Local Refernce using ViewChild
    });

  }
}
