import { CompanyService } from './../../company/company.service';
import { Company } from './../../company/company';
import { ProjectService } from './../../project/project.service';
import { Project } from './../../project/project';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TaskService } from './../../task/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css'],
})
export class TaskManagementComponent implements OnInit {
  task: Task = new Task();
  project: Project = new Project();

  submitted = false;
  selectedValue: any;
  selectedValueProject: any;

  //pour l'affichage
  tasks: Task[] = [];
  projects: Project[] = [];
  companys: Company[] = [];

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
    this.submitted = true;
    this.getProject();
    this.getCompany();
    // this.createTask();
  }

  public getProject(): void {
    this.projectService.projectkList().subscribe(
      (data: Project[]) => {
        this.projects = data;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCompany(): void {
    this.companyService.companykList().subscribe(
      (data: Company[]) => {
        this.companys = data;
        console.log(this.companys);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllTasks(): void {
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
  ChangeDepartment(e: any) {
    console.log(e.target.value);
    this.selectedValue = e.target.value;
  }

  ChargeProject(e: any) {
    console.log(e.target.value);
    this.selectedValueProject = e.target.value;
  }

  // createTask(addtaskform: NgForm) {
  //   console.log(addtaskform.form);
  //   console.log('valeurs: ', JSON.stringify(addtaskform.value));
  // }

  // public getTasks(): void {
  //   this.taskService.taskList().subscribe(
  //     (data: Task[]) => {
  //       this.tasks = data;
  //       console.log(this.tasks);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  /*le vari ***/
  createTask(addtaskform: NgForm) {
    console.log(addtaskform);
    this.taskService.createTask(addtaskform.value).subscribe(
      (data: Task) => {
        console.log('tache enregistrer avec succ??s');
        alert('t??che enregistrer avec succ??s');
        this.ngOnInit();
        this.router.navigate(['taskList']);
      },
      (error) => alert('t??che non enregistrer')
    );
  }

  createProject(addtaProjectform: NgForm) {
    console.log(addtaProjectform);
    this.projectService.createProject(addtaProjectform.value).subscribe(
      (data: Project) => {
        console.log('projet cr??er avec succ??s');
        alert('projet cr??er avec succ??s');
        this.ngOnInit();
        this.router.navigate(['projectList']);
      },
      (error) => alert('projet non cr??er')
    );
  }
}

function e(e: any) {
  throw new Error('Function not implemented.');
}
