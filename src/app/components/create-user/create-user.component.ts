import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserService } from './../../userResgisterLogin/login-user.service';
import { User } from './../../userResgisterLogin/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  //affichage
  users: User[] = [];
  static urt = '';
  constructor(
    private loginUserService: LoginUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  createUser(addtaskform: NgForm) {
    console.log(addtaskform);
    this.loginUserService.createUser(addtaskform.value).subscribe(
      (data: User) => {
        console.log('Utilisateur enregistrer avec succès');
        alert('Utilisateur enregistrer avec succès');
        this.ngOnInit();
        // this.router.navigate(['taskList']);
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

  onSubmit() {}

  deleteUser() {}

  // if (this.user.adminRole == "Y") {

  //       }
}
