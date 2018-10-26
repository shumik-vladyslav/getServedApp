import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private loginStatus = new BehaviorSubject<boolean>(false);

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  public getLoginStatusAsObservable() {
    return this.loginStatus.asObservable();
  }

  public setLoginStatus(status: boolean){
    this.loginStatus.next(status);
  }

  signIn(user) {
    return this.http.post('https://getserved20181024044343.azurewebsites.net/login', user);
  }

  signUp(user) {
    return this.http.post('https://getserved20181024044343.azurewebsites.net/registration', user);
  }

}
