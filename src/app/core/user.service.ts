import { Injectable } from "@angular/core";
import { countService } from "./services/count.service";

// Used as a meta Data for this Service as everything requires a Metadata in Angular
@Injectable({
    providedIn: 'root'
  })


export class userService{

    // Typescripts lets us use these, as also injectable properties
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    countService =0 ;

    constructor(
        private counterService: countService,
    ){}
    onSetToActive(userno: number){
        // console.log("Service is being Called:- ", userno)
        const user = this.inactiveUsers[userno];
        this.activeUsers.push(user);
        this.inactiveUsers.splice(userno, 1)
        this.counterService.fromInacToActive();
    }

    onSetToInactive(userno: number){
        // debugger
        // console.log("Inactive Service is being used:- ", userno)
        const user = this.activeUsers[userno]
        this.inactiveUsers.push(user);
        this.activeUsers.splice(userno, 1) 
        this.counterService.fromActToInactive()
    }


}