import { Injectable } from "@angular/core";

@Injectable({
    "providedIn": "root"
})

export class countService{
    countInactToActive =0 
    countActToInactive =0;

    fromInacToActive () {
        this.countInactToActive++;
        console.log("InActive to Active Count is:- ", this.countInactToActive);
    }
    fromActToInactive () {
        this.countActToInactive++;
        console.log("Active to Inactive Count is:- ", this.countActToInactive)
    }
}