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

 model = new Member(232111, 'Test Member', this.levels[0], '02/28/2018');

 submitted = false;

 onSubmit() { this.submitted = true; }

 newMember() {
  this.model = new Member(249000, '', this.levels[0], '');
}


 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.model); }

}
