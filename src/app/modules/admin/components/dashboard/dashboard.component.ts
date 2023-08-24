import { Component } from '@angular/core';
import { Globals } from '../Globals';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  role: any;
  admin: boolean = false;

  constructor(globals: Globals) {
    this.role = sessionStorage.getItem('userRole');
    console.log(sessionStorage.getItem('userRole'));
    if (this.role == 'Admin' || this.role == 'SuperAdmin') {
      this.admin = false;
    } else {
      this.admin = true;
    }
  }
}
