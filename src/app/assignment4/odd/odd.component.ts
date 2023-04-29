import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() countRecieved : number;
  constructor() { }
  count : number[] = [];

  ngOnInit(): void {
    console.log("Count recieved: " , this.countRecieved);
    if ( this.countRecieved %2 != 0) {
      this.count.push(this.countRecieved) 
    }
  }
  

}
