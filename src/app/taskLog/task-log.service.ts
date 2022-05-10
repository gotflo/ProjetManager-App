import { TaskLog } from './task-log';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskLogService {
  constructor(private httpClient: HttpClient) {}
  urlTaskLog: string = 'http://localhost:8080/taskLog/taskLogList';
  addTasksLog: string = 'http://localhost:8080/taskLog/addTaskLog';
  urlTasksLogSize: string = 'http://localhost:8080/taskLog/tasksLogSize';

  deleteTasksLog: string = 'http://localhost:8080/taskLog/deleteTaskLog';

  taskLogList(): Observable<TaskLog[]> {
    return this.httpClient.get<TaskLog[]>(`${this.urlTaskLog}`);
  }

  taskLogSize() {
    return this.httpClient.get<any>(this.urlTasksLogSize);
  }

  createTaskLog(taskLog: TaskLog): Observable<TaskLog> {
    return this.httpClient.post<TaskLog>(`${this.addTasksLog}`, taskLog);
  }

  deleteTaskLog(idTaskLog: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteTasksLog}/${idTaskLog}`, {
      responseType: 'text',
    });
  }
}
