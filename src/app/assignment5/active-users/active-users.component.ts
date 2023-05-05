import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userService } from 'src/app/core/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  constructor( 
    private userServices: userService,
  ){}

  users = []
  ngOnInit(): void {
    this.users = this.userServices.activeUsers
  }
  // @Input() users: string[];

  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive( no: number) {
    this.userServices.onSetToInactive(no)
    // this.userSetToInactive.emit(no);
  }

}
