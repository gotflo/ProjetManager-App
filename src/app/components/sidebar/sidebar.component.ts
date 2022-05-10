import { LogInComponent } from './../log-in/log-in.component';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { User } from 'src/app/userResgisterLogin/user';
import { LoginUserService } from './../../userResgisterLogin/login-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // user: User = new User();
  // users: User[] = [];
  // username = LoginUserService.logu;
  username = LogInComponent.username;
  constructor(
    private loginUserService: LoginUserService,
    private http: HttpClient,
    private router: Router
  ) {
    this.username;
  }

  ngOnInit(): void {
    this.username;
    // this.getUser();
  }

  // logout() {
  //   this.http
  //     .post('logout', {})
  //     .finally(() => {
  //       this.loginUserService.authenticated = false;
  //       this.router.navigateByUrl('/login');
  //     })
  //     .subscribe();
  // }

  // userLogin() {
  //   console.log(this.user);
  //   this.loginUserService.loginUser(this.user).subscribe(
  //     (data) => {
  //       // this.router.navigate(['dashboard']);
  //       alert('Connexion réussi');
  //       this.getUser();
  //     },
  //     (error) => alert('Entrez correctement vos identifiants svp')
  //   );
  // }

  // public getUser(): void {
  //   this.loginUserService.UserList().subscribe(
  //     (data: User[]) => {
  //       this.users = data;
  //       console.log(this.users);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  Logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
