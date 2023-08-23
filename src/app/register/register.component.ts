import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  EmployeeArray: any[] = [];

  employeeName: String = '';
  employeeEmail: String = '';
  employeeAddress: String = '';
  mobileNumber: String = '';
  employeePassword: String = '';

  currentEmployeeId = '';

  constructor(private http: HttpClient, private router: Router) {
    this.getAllEmployee();
  }

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

  // Add Employee
  register() {
    console.log(this.employeeName);
    let employee = {
      employeeName: this.employeeName,
      employeeEmail: this.employeeEmail,
      employeeAddress: this.employeeAddress,
      mobileNumber: this.mobileNumber,
      employeePassword: this.employeePassword,
    };
    this.http
      .post('http://localhost:8080/api/v1/employee/create', employee, {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        console.log(response);
        alert('Employee Added Successfully');
        this.getAllEmployee();

        this.employeeName = '';
        this.employeeEmail = '';
        this.employeeAddress = '';
        this.mobileNumber = '';
        this.employeePassword = '';
        this.router.navigate(['login']);
      });
  }
}
