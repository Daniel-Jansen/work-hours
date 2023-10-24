import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { BossComponent } from './boss/boss.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    BossComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class UserModule { }
