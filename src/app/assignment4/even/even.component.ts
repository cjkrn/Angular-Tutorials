import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('countEmit') countRecieved : number;
  constructor() { }
  count : number[] = [];

  ngOnInit(): void {
    console.log("Count recieved: " , this.countRecieved);
    if ( this.countRecieved %2 == 0) {
      this.count.push(this.countRecieved) 
    }
  }
  

}
