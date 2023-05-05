import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/core/user.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(
    private userServices: userService,
  ){}
  users= []
  ngOnInit() {
    this.users = this.userServices.inactiveUsers;
  }

  onSetToActive(no: number) {
    this.userServices.onSetToActive(no)
  }



}
