import { ToastGlobalComponent } from './components/toast-global/toast-global.component';
import { TaskLogComponent } from './components/task-log/task-log.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { AuthGuard } from './shared/auth.guard';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'taskList', component: ListTaskComponent, canActivate: [AuthGuard] },
  {
    path: 'projectList',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'companyList',
    component: CompanyListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user', component: CreateUserComponent, canActivate: [AuthGuard] },
  { path: 'taskLog', component: TaskLogComponent, canActivate: [AuthGuard] },
  {
    path: 'updateTask/:idTask',
    component: UpdateTaskComponent,
    canActivate: [AuthGuard],
  },
  { path: 'updateProject/:idProject', component: UpdateProjectComponent },
  { path: 'toats', component: ToastGlobalComponent },
  {
    path: 'taskManagement',
    component: TaskManagementComponent,
    canActivate: [AuthGuard],
  },
  // { path: '**', component: DashboardComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
