import { Injectable } from '@angular/core';
import { Member } from './member';


import { MEMBERS } from './mock-members';

@Injectable()
export class MembersService {
    //num1: string;
    members: any[];

    constructor() {     }

    getMembers(){ return MEMBERS; }


    isValidMember(num_given){
    // asks if a given number is a memberid
        this.members = this.getMembers();
        var num = 0;
        for (num=0; num < this.members.length; num++){
            if (num_given === this.members[num].memberid){
                return true;
            }
        }

        // function validID(num_given){
        //     //returns true when the given number is
        //     //a value of an object at its memberid key
        //     return num_given === this.members.memberid;
        // }

        //this.members.find(validID)
    }

}
