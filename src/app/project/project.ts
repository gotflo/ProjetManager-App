import { Task } from './../task/task';
export class Project {
  projectName!: string;
  taskList!: Array<Task>;
  idProject!: number;
  companyName!: string;
  static idProject: any;
}
