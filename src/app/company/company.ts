import { Project } from '../project/project';
import { Task } from '../task/task';
export class Company {
  idCompany!: number;
  idProject!: number;
  idTask!: number;
  companyName!: string;
  projectName!: string;
  taskList!: Array<Task>;
  projects!: Array<Project>;
  taskName!: string;
}
