import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}
  urlTasks: string = 'http://localhost:8080/task/tasksList/';
  urlTasksById: string = 'http://localhost:8080/task/tasksListById';
  deleteTasks: string = 'http://localhost:8080/task/deleteTask';
  addTasks: string = 'http://localhost:8080/task/addTask';
  updateTasks: string = 'http://localhost:8080/task/updateTask';
  urlTasksSize: string = 'http://localhost:8080/task/tasksSize';

  taskList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.urlTasks}`);
  }

  getTaskById(idTask: Number): Observable<any> {
    return this.httpClient.get(`${this.urlTasksById}/${idTask}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.addTasks}`, task);
  }

  updateTask(idTask: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.updateTasks}/${idTask}`, value);
  }

  deleteTask(idTask: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteTasks}/${idTask}`, {
      responseType: 'text',
    });
  }

  // deleteTask(idTask: number): Observable<Task> {
  //   return this.httpClient.delete<Task>(this.urlTasks + idTask);
  // }

  // taskSize() {
  //   return this.httpClient.get<Task[]>(this.urlTasksSize);
  // }

  taskSize() {
    return this.httpClient.get<any>(this.urlTasksSize);
  }
}
