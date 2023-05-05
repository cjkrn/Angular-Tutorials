import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

  @Input() countRecieved : number;
  constructor() { }
  oddCount : number[] = [];

  ngOnInit(): void {
  }
  ngOnChanges(change: SimpleChanges){
    if ( this.countRecieved %2 != 0) {
      console.log("Odd Count recieved:-" , this.countRecieved);
      this.oddCount.push(this.countRecieved) 
    }
  }

}
