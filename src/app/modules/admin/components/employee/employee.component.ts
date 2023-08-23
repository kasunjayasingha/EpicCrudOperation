import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  EmployeeArray: any[] = [];

  employeeName: String = '';
  employeeEmail: String = '';
  employeeAddress: String = '';
  mobileNumber: String = '';
  employeePassword: String = '';

  currentEmployeeId = '';

  constructor(private http: HttpClient) {
    this.getAllEmployee();
  }
  ngOnInit(): void {
    // this.getAllEmployee();
  }

  saveButtonName: string = 'Save';
  // Change button name
  save() {
    if (this.currentEmployeeId == '') {
      this.register();
    } else {
      this.updateEmployee();
    }
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
      });
  }
  // clear the form
  clear() {
    this.employeeName = '';
    this.employeeEmail = '';
    this.employeeAddress = '';
    this.mobileNumber = '';
    this.employeePassword = '';
    this.saveButtonName = 'Save';
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

  // Update Employee
  setUpdate(data: any) {
    this.saveButtonName = 'Update';
    this.employeeName = data.employeeName;
    this.employeeEmail = data.employeeEmail;
    this.employeeAddress = data.employeeAddress;
    this.mobileNumber = data.mobileNumber;
    this.employeePassword = data.employeePassword;
    this.currentEmployeeId = data.employeeId;
  }

  updateEmployee() {
    let employee = {
      employeeId: this.currentEmployeeId,
      employeeName: this.employeeName,
      employeeEmail: this.employeeEmail,
      employeeAddress: this.employeeAddress,
      mobileNumber: this.mobileNumber,
      employeePassword: this.employeePassword,
    };
    this.http
      .put('http://localhost:8080/api/v1/employee/updateEmployee', employee, {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        console.log(response);
        alert('Employee Updated Successfully');
        this.getAllEmployee();

        this.employeeName = '';
        this.employeeEmail = '';
        this.employeeAddress = '';
        this.mobileNumber = '';
        this.employeePassword = '';
        this.saveButtonName = 'Save';
      });
  }

  // Delete Employee
  setDelete(data: any) {
    this.http
      .delete(
        'http://localhost:8080/api/v1/employee/deleteEmployee' +
          '/' +
          data.employeeId,
        {
          responseType: 'text',
        }
      )
      .subscribe((response: any) => {
        console.log(response);
        alert('Employee Deleted Successfully');
        this.getAllEmployee();
      });
  }
}
