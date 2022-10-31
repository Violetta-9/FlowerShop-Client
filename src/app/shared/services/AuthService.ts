import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  constructor() {}

  // ...
  public isAuthenticated(): boolean {

    const role = localStorage.getItem('role');
    console.log(role);

    if(role=='Admin'){
      return true;
    }
    return false;
  }

}
