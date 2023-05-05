import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit{

  @Output() countEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  count = 0
  game:any; 
  onStartGame(){
    if (this.game) {
      return // if game is running
    }
    else{
      // console.log("Event", event, status);
      this.game = setInterval( () => {
          console.log("Count", this.count)
          // this.countEmit.emit(this.count)
          this.count ++ ;  
        }
        , 1000);
    }
   } 
  onPauseGame() {
    // this.count =0 
    clearInterval(this.game);
    this.game = null; // To clear the game state
  }   

}
