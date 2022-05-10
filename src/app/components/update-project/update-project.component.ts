import { ProjectService } from '../../project/project.service';
import { Project } from '../../project/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
})
export class UpdateProjectComponent implements OnInit {
  project!: Project;
  idProject!: number;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.project = new Project();
    this.idProject = this.route.snapshot.params['idProject'];

    this.projectService.getProjectById(this.idProject).subscribe(
      (data) => {
        console.log(data);
        this.project = data;
        // alert('tâche supprimer avec succès');
      },
      (error) => alert('error')
    );
  }

  updateProject() {
    this.projectService.updateProjects(this.idProject, this.project).subscribe(
      (data) => {
        console.log(data);
        alert('Projet modifier avec succès');
        this.router.navigate(['/projectList']);
      },
      (error) => alert('Projet non modifier')
    );
    this.project = new Project();
  }

  onSubmit() {
    this.submitted = true;
    this.updateProject();
  }
}
