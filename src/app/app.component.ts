import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'work-hours';
  // what i want to create:
  // users with the roles: Admin, Boss, Employee
  // allow any user with any role to log in and out
  // allow Employee to see their own work hours
  // allow Employee to clock in and out
  // allow Boss to see certain Employees' work hours
  // allow Boss to set work hours for certain Employees
  // allow Admin to set what Employee works for what Boss

  // what do i need:
  // users, roles, work hours, clock in/out, login/logout

  ngOnInit() {
    

    // makes toolbar fade in from above after the page loads
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
        const toolbar: HTMLElement | null = document.getElementById("toolbar");
        if (toolbar) {
          toolbar.classList.add("!translate-y-0");
        }
      }, 100);
    });
  }
}
