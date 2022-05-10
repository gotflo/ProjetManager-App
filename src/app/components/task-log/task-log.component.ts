import { CreateUserComponent } from './../create-user/create-user.component';
import { User } from 'src/app/userResgisterLogin/user';
import { LoginUserService } from './../../userResgisterLogin/login-user.service';
import { TaskService } from './../../task/task.service';
import { Task } from 'src/app/task/task';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskLogService } from './../../taskLog/task-log.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskLog } from 'src/app/taskLog/task-log';

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css'],
})
export class TaskLogComponent implements OnInit {
  tasksLog: TaskLog[] = [];
  tasks: Task[] = [];
  users: User[] = [];
  selectedValueTask: any;
  selectedValueUser: any;
  taskLog: TaskLog = new TaskLog();

  constructor(
    private router: Router,
    private taskService: TaskService,
    private taskLogService: TaskLogService,
    private loginUserService: LoginUserService
  ) {}

  ngOnInit(): void {
    this.getTasksLog();
    this.getTasks();
    this.getTasksLog();
    this.getUser();
  }

  public getTasks(): void {
    this.taskService.taskList().subscribe(
      (data: Task[]) => {
        this.tasks = data;
        console.log(this.tasks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
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
    // CreateUserComponent.urt;
  }

  public getTasksLog(): void {
    this.taskLogService.taskLogList().subscribe(
      (data: TaskLog[]) => {
        this.tasksLog = data;
        console.log(this.tasksLog);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ChargeTask(e: any) {
    console.log(e.target.value);
    this.selectedValueTask = e.target.value;
  }

  ChargeUser(e: any) {
    console.log(e.target.value);
    this.selectedValueUser = e.target.value;
  }

  deleteTaskLog(idTaskLog: number) {
    // console.log(idTask);
    this.taskLogService.deleteTaskLog(idTaskLog).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
        alert('Journal supprimer avec succès');
      },
      (error) => alert('Journal non supprimer')
    );
  }

  createTaskLog(addtaskLogform: NgForm) {
    console.log(addtaskLogform);
    this.taskLogService.createTaskLog(addtaskLogform.value).subscribe(
      (data: TaskLog) => {
        console.log('Journal enregistrer avec succès');
        alert('Journal enregistrer avec succès');
        this.ngOnInit();
      },
      (error) => alert('Journal non enregistrer')
    );
  }
}
