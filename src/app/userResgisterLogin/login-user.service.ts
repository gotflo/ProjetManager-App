import { LogInComponent } from './../components/log-in/log-in.component';
import { map, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginUserService {
  authenticated = false;
  AllUser: string = 'http://localhost:8080/user/usersList';
  addUser: string = 'http://localhost:8080/user/addUser';
  urlUserSize: string = 'http://localhost:8080/user/userSize';
  private baseUrl = 'http://localhost:8080/user/login';

  constructor(private httpClient: HttpClient) {}

  // static logu: String = LogInComponent.username;

  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user).pipe(
      map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(localStorage.getItem('currentUser'));
        return user;
      })
    );
  }

  UserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.AllUser}`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.addUser}`, user);
  }

  userSize() {
    return this.httpClient.get<any>(this.urlUserSize);
  }
}
