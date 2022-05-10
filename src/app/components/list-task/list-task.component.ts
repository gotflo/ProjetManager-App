import { Observable } from 'rxjs';
import { TaskService } from './../../task/task.service';
import { Task } from '../../task/task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from '../confirm-dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  result: string = '';
  tasks: Task[] = [];
  taskup!: Task;
  idTask!: number;
  tasks1!: Observable<Task[]>;

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTasks();
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

  deleteTask(idTask: number) {
    // console.log(idTask);
    this.taskService.deleteTask(idTask).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
        alert('tâche supprimer avec succès');
      },
      (error) => alert('Tâche non supprimer')
    );
  }

  updateTask(idTask: number) {
    this.router.navigate(['updateTask', idTask]);
  }

  // updateTask() {
  //   this.taskService.updateTask(this.idTask, this.taskup).subscribe(
  //     (data) => {
  //       console.log(data);

  //       alert('tâche modifier avec succès');
  //     },
  //     (error) => alert('Tâche non modifier')
  //   );
  //   this.taskup = new Task();
  //   this.router.navigate(['/taskList']);
  // }

  confirmDialog(): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel('Confirm Action', message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
    });
  }
}
