import { LogInComponent } from './../components/log-in/log-in.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username!: String;
  constructor() {
    this.username = LogInComponent.username;
  }

  IsUserLoggedIn() {
    if (this.username != '') {
      return true;
    } else {
      return false;
    }
  }
}
