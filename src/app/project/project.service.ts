import { Project } from './project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}
  urlproject: string = 'http://localhost:8080/project/projectsList';
  addProjects: string = 'http://localhost:8080/project/addProject/';
  updateProject: string = 'http://localhost:8080/project/updateProject';
  deleteProject: string = 'http://localhost:8080/project/deleteProject';

  projectkList(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.urlproject}`);
  }

  getProjectById(idProject: Number): Observable<any> {
    return this.httpClient.get(`${this.urlproject}/${idProject}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${this.addProjects}`, project);
  }

  updateProjects(idProject: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.updateProject}/${idProject}`, value);
  }

  deleteProjects(idProject: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteProject}/${idProject}`, {
      responseType: 'text',
    });
  }
}
