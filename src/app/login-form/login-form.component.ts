import { Component, OnInit } from '@angular/core';

import { MEMBERS }    from 'app/mock-members';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  constructor(){ }


  ngOnInit(){
  }

  members = MEMBERS;

  ids = ['232111', '235788', '248900'];

  value = '';



  onSubmit(value: string){
      this.value = value;

      if (this.ids.indexOf(value) != -1){
          console.log('this works!')
      }
      else{
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
