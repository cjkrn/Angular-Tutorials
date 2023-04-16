import { Component } from '@angular/core';

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.css']
})
export class CourseMainComponent {

  serverElements = [{type: 'server', name: 'Testserver', content: 'Its a test!'}]

  
  onServerAdded ( serverData:{serverName: string, serverContent: string} ){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
  onChangesFirst(){
    this.serverElements[0].name= 'Changed';
  }
  onDestroyFirst(){
    console.log("Destroy called")
    this.serverElements.splice(0,1);
  }
}
