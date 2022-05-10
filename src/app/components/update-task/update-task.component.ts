import { TaskService } from './../../task/task.service';
import { Task } from 'src/app/task/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  task!: Task;
  idTask!: number;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.task = new Task();
    this.idTask = this.route.snapshot.params['idTask'];

    this.taskService.getTaskById(this.idTask).subscribe(
      (data) => {
        console.log(data);
        this.task = data;
        // alert('tâche supprimer avec succès');
      },
      (error) => alert('error')
    );
  }

  updateTask() {
    this.taskService.updateTask(this.idTask, this.task).subscribe(
      (data) => {
        console.log(data);
        alert('tâche modifier avec succès');
        this.router.navigate(['/taskList']);
      },
      (error) => alert('Tâche non modifier')
    );
    this.task = new Task();
  }

  onSubmit() {
    this.submitted = true;
    this.updateTask();
  }
}
