import { LogInComponent } from './../components/log-in/log-in.component';
import { TaskLog } from 'src/app/taskLog/task-log';
export class User {
  username!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  adminRole!: CharacterData;
  admin!: Boolean;
  taskLogList!: Array<TaskLog>;
  user!: Array<User>;
}
