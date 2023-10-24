import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursComponent } from './hours/hours.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { BossComponent } from './boss/boss.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    HoursComponent,
    EmployeeComponent,
    BossComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class LogbookModule { }
