import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginUserService } from './../../userResgisterLogin/login-user.service';
import { RegisterService } from './../../userResgisterLogin/register.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/userResgisterLogin/user';
// import { error } from 'console';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  user: User = new User();
  users: User[] = [];
  static username: any;
  //  book: any = {
  //   user: LogInComponent.username,
  // };

  constructor(
    private registerService: RegisterService,
    private loginUserService: LoginUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    LogInComponent.username;
  }

  userLogin() {
    console.log(this.user);
    this.loginUserService.loginUser(this.user).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
        // alert('Connexion réussi');
        LogInComponent.username = this.user.username;
        console.log("Nom d'utilisateur : " + LogInComponent.username);
        this.ngOnInit();
      },
      (error) => alert('Entrez correctement vos identifiants svp')
    );
  }

  userRegister() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(
      (data) => {
        // alert('Utilisateur enregistrer avec succès');
      },
      (error) => alert('Utilisateur non enregistrer')
    );
  }

  public getUser(): void {
    this.loginUserService.UserList().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // logout() {
  //   return new Observable<boolean>((observer) => {
  //     this.httpClient
  //   });
  // }
}
