import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit{
  
  @Input('srvElement') element: {type:string, name: string, content: string } // https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656066#announcements


  constructor(){}
  ngOnInit(){}
  
}
