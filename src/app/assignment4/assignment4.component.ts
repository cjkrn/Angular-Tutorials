import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit{

  @Output('') countEmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      
  }
  count = 0
  game:any; 
  Event(event, status){
    if (status == 'start'){
       this.game = setInterval( () => {
            this.countEmit.emit(this.count +=1)
          }
          , 1000);
    }
    else{
      this.count =0 
      clearInterval(this.game);
    }
  }

}
