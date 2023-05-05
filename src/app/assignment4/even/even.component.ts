import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

  @Input() countRecieved : number;
  constructor() { }
  evenCount : number[] = [];

  ngOnInit(): void {
  }
  ngOnChanges(change: SimpleChanges){
    if ( this.countRecieved %2 == 0 && this.countRecieved != 0) {
      console.log("Even Count recieved:-" , this.countRecieved);
      this.evenCount.push(this.countRecieved) 
    }
  }

}
