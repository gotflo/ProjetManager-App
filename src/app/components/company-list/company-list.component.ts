import { TaskService } from './../../task/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CompanyService } from './../../company/company.service';
import { Company } from './../../company/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  taskallSize: any;

  companys: Company[] = [];
  constructor(
    private companyService: CompanyService,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCompany();

    this.taskService.taskSize().subscribe((data) => {
      this.taskallSize = data;
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
}
