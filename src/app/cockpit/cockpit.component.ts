import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // EventEmit :- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#announcements
  @Output() serverCreated = new EventEmitter< {serverName: string, serverContent: string}>();  // () to call the constr of EventEmitter
  @Output('bpCreated') blueprintCreated = new EventEmitter< {serverName: string, serverContent: string}>();  // () to call the constr of EventEmitter

  // newServerName = ''
  // newServerContent =''
  
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
        serverContent: this.newServerContent
      })
    }
  onAddBlueprint(){
  // EventEmit :- https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#announcements
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })

  }
}
