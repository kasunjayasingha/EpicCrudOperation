import { Globals } from './../modules/admin/components/Globals';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  EmployeeArray: any[] = [];
  AdminArray: any[] = [];

  constructor(
    private http: HttpClient,
    private globals: Globals,
    private router: Router
  ) {
    this.getAllEmployee();
    this.getAllAdmins();
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      // UsernameValidators.shouldBeUnique,
    ]),
    password: new FormControl('', Validators.required),
  });

  // Get All Employees
  getAllEmployee() {
    console.log('get all employee');
    this.http
      .get('http://localhost:8080/api/v1/employee/getAllEmployee')
      .subscribe((response: any) => {
        console.log('all employees', response);
        this.EmployeeArray = response;
      });
  }

  // Get All Admins
  getAllAdmins() {
    console.log('get all admins');
    this.http
      .get('http://localhost:8080/api/v1/admins/getAllAdmins')
      .subscribe((response: any) => {
        console.log('all admins', response);
        this.AdminArray = response;
      });
  }

  login() {
    let email = this.email;
    let password = this.password;
    console.log(email, password);

    if (
      this.AdminArray.find(
        (admin) => admin.adminEmail == email && admin.adminPassword == password
      )
    ) {
      if (
        this.AdminArray.find(
          (admin) =>
            admin.adminType == 'SuperAdmin' &&
            admin.adminEmail == email &&
            admin.adminPassword == password
        )
      ) {
        sessionStorage.setItem('userRole', 'SuperAdmin');
      } else {
        sessionStorage.setItem('userRole', 'Admin');
      }
      alert('Admin Login Successfully');
      this.router.navigate(['admin']);
    } else if (
      this.EmployeeArray.find(
        (employee) =>
          employee.employeeEmail == email &&
          employee.employeePassword == password
      )
    ) {
      if (
        this.EmployeeArray.find(
          (employee) =>
            (employee.adminStatus == 'request' ||
              employee.adminStatus == 'pending') &&
            employee.employeeEmail == email &&
            employee.employeePassword == password
        )
      ) {
        alert('Your Registration is Processing...');
      } else {
        sessionStorage.setItem('userRole', 'Employee');
        alert('Employee Login Successfully');
        this.router.navigate(['admin']);
      }
    } else {
      alert('Invalid Credentials');
    }
  }
}
