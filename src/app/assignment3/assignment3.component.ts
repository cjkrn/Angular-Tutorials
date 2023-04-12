import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

  no_of_clicks:any[] =[]
  count = 0;
  flag: boolean = true

  constructor(){

  }
  ngOnInit(){}

  getColor(){
    return this.count>5 ? 'blue': 'white'

  }
  toggleDisplayPara(){

    this.no_of_clicks.push(new Date())
    this.flag = !this.flag
    // console.log(this.count)
  }
  // console.log(this.count)

}
