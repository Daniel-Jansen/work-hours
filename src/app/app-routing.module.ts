import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogbookComponent } from './logbook/logbook.component';
import { LoginComponent } from './logbook/login/login.component';
import { LogoutComponent } from './logbook/logout/logout.component';

const routes: Routes = [
  { path: '', component: LogbookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
