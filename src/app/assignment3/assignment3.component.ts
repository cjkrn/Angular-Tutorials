import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

  no_of_clicks:number[] =[]
  count = 0;
  flag: boolean = true

  constructor(){

  }
  ngOnInit(){}

  toggleDisplayPara(){
    this.count ++;
    this.no_of_clicks.push(this.count)
    this.flag = !this.flag
    console.log(this.count)
  }
  // console.log(this.count)

}
