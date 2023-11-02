import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HoursComponent } from './hours/hours.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { LogbookComponent } from './logbook.component';
import { AdminComponent } from './user/admin/admin.component';
import { BossComponent } from './user/boss/boss.component';
import { EmployeeComponent } from './user/employee/employee.component';



@NgModule({
  declarations: [
    HoursComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    AdminComponent,
    BossComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class LogbookModule { }
