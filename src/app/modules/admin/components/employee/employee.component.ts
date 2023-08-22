import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  EmployeeArray: any[] = [];

  employeeName: any;
  employeeAddress: any;
  mobileNumber: any;

  currentEmployeeId = '';

  constructor(private http: HttpClient) {
    this.getAllEmployee();
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
    let employee = {
      employeeName: this.employeeName,
      employeeAddress: this.employeeAddress,
      mobileNumber: this.mobileNumber,
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
        this.employeeAddress = '';
        this.mobileNumber = '';
      });
  }
  // clear the form
  clear() {
    this.employeeName = '';
    this.employeeAddress = '';
    this.mobileNumber = '';
    this.saveButtonName = 'Save';
  }

  // Get All Employees
  getAllEmployee() {
    this.http
      .get('http://localhost:8080/api/v1/employee/getAllEmployee')
      .subscribe((response: any) => {
        console.log(response);
        this.EmployeeArray = response;
      });
  }

  // Update Employee
  setUpdate(data: any) {
    this.saveButtonName = 'Update';
    this.employeeName = data.employeeName;
    this.employeeAddress = data.employeeAddress;
    this.mobileNumber = data.mobileNumber;
    this.currentEmployeeId = data.employeeId;
  }

  updateEmployee() {
    let employee = {
      employeeId: this.currentEmployeeId,
      employeeName: this.employeeName,
      employeeAddress: this.employeeAddress,
      mobileNumber: this.mobileNumber,
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
        this.employeeAddress = '';
        this.mobileNumber = '';
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
