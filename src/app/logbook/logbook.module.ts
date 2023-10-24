import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursComponent } from './hours/hours.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    HoursComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class LogbookModule { }
