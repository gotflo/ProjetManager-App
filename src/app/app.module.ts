import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { TaskService } from './task/task.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { LoginUserService } from './userResgisterLogin/login-user.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgChartsModule } from 'ng2-charts';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { TaskLogComponent } from './components/task-log/task-log.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastGlobalComponent } from './components/toast-global/toast-global.component';
import { ToastsContainerComponent } from './components/toast-global/toasts-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    DashboardComponent,
    ListTaskComponent,
    SidebarComponent,
    ProjectListComponent,
    CompanyListComponent,
    TaskManagementComponent,
    UpdateTaskComponent,
    UpdateProjectComponent,
    ConfirmDialogComponent,
    CreateUserComponent,
    TaskLogComponent,
    ToastGlobalComponent,
    ToastsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    CustomMaterialModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'XSRF-TOKEN' }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgbModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [LoginUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
