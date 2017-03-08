import { Component, OnInit } from '@angular/core';
import { Routes ,  Router} from '@angular/router';
import { MembersService }  from '../members.service';


import { MEMBERS }    from 'app/mock-members';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
    //ids = ['232111', '235788', '248900'];
    members: any[];


    constructor( private router: Router,
      private ms: MembersService ){
          this.members = this.ms.getMembers();
          console.log(this.members);
          //console.log(this.ms.checkIfValidMember())
      }


  ngOnInit(){

  }



  onSubmit(value: string){

      //this.value = this.ms.checkIfValidMember();

      if (this.ms.isValidMember(value)){
      //if (this.members.includes(value)){
          console.log('this works!');
          this.router.navigate(['./logged-in-home']);
      }
      else {
          console.log('problem!')
      }
  }






/*
 newMember() {
  this.model = new Member(this.ids[2], '', this.levels[0], '');
}


 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.model); }
*/
}
