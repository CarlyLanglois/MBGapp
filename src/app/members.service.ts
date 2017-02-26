import { Injectable } from '@angular/core';

import { MEMBERS } from './mock-members';

@Injectable()
export class MembersService {

  constructor() { }

  getMembers(){ return MEMBERS; }

}
