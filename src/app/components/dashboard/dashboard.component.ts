import { LoginUserService } from './../../userResgisterLogin/login-user.service';
import { TaskService } from './../../task/task.service';
import { ProjectService } from './../../project/project.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CompanyService } from '../../company/company.service';
import { Company } from '../../company/company';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project/project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  companys: Company[] = [];
  project = Project;
  taskallSize: any;
  userAllSize: any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [
    // {Project},
    'Dev Web',
    'Dev Mobile',
    'Design App',
    'Analyse données',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Taches en cours...' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Taches réaliser' },
  ];

  constructor(
    private companyService: CompanyService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private userService: LoginUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCompany();
    this.getProject();

    this.taskService.taskSize().subscribe((data) => {
      this.taskallSize = data;
    });

    this.userService.userSize().subscribe((data) => {
      this.userAllSize = data;
    });
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
}
