import { Component, OnInit } from '@angular/core';

import { Member }    from 'app/member';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  constructor(){ }


  ngOnInit(){
  }


 levels = ['Individual', 'Garden Senior',
           'Garden', 'Friends and Family'];

 ids = [232111, 235788, 248900]

 model = new Member(this.ids[0], 'Test Member', this.levels[0], '02/28/2018');
 model2 = new Member(this.ids[1], 'Test Member 2', this.levels[3], '03/30/2018');

 submitted = false;

 onSubmit() { this.submitted = true; }

 newMember() {
  this.model = new Member(this.ids[2], '', this.levels[0], '');
}


 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.model); }

}
