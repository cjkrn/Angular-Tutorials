import { Component, OnInit } from '@angular/core';
import { userService } from '../core/user.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit{

  activeUsers: string[]
  inactiveUsers: string[]

  constructor(
    private userService: userService,

  ){ }
  ngOnInit() {
    this.activeUsers = this.userService.activeUsers
    this.inactiveUsers =  this.userService.inactiveUsers
  }
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(event : Event) {
  //   console.log("onSet TO Inactive:- ",event)
  //   // this.userService.onSetToInactive(no)

  //   // this.inactiveUsers.push(this.activeUsers[id]);
  //   // this.activeUsers.splice(id, 1);
  // }


  // onSetToActive(id: number) {
  //   this.userService.onSetToActive(id)
  // }
}
