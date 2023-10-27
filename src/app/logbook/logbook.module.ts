import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HoursComponent } from './hours/hours.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { LogbookComponent } from './logbook.component';



@NgModule({
  declarations: [
    HoursComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    LogbookComponent  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    LogbookComponent,
  ]
})
export class LogbookModule { }
