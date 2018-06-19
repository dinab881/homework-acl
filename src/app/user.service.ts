import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getCurrentUser(){
    return {
      name: 'Gigi',
      role_id:  '2345#9887'
    };
  }

}
