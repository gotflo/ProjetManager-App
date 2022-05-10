import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from './../../project/project.service';
import { Project } from './../../project/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProject();
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

  deleteProject(idProject: number) {
    // console.log(idProject);
    this.projectService.deleteProjects(idProject).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
        alert('Projet supprimer avec succès');
      },
      (error) => alert('projet non supprimer')
    );
  }

  updateProject(idProject: number) {
    this.router.navigate(['updateProject', idProject]);
  }
}
