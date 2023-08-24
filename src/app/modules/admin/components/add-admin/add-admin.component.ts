import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Globals } from '../Globals';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  saveButtonName = 'Save';
  Status: any[] = [];
  adminOption = ['Admin', 'SuperAdmin'];

  adminName: string = '';
  adminEmail: string = '';
  adminPassword: string = '';
  adminType: string = '';
  adminStatus: string = '';
  employeeName: string = '';
  employeeEmail: string = '';
  employeeAddress: string = '';
  mobileNumber: string = '';
  employeePassword: string = '';

  currentEmployeeId = '';

  AdminArray: any[] = [];
  admin: boolean = false;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      // UsernameValidators.shouldBeUnique,
    ]),
    password: new FormControl('', Validators.required),
  });
  EmployeeUpdateArray: any[] = [];

  constructor(private http: HttpClient, globals: Globals) {
    this.getAllAdmins();
    if (globals.getAdminDataArray().setUpdateClick == true) {
      this.saveButtonName = 'Update';
      this.adminName = globals.getAdminDataArray().adminName;
      this.adminEmail = globals.getAdminDataArray().adminEmail;
      this.adminPassword = globals.getAdminDataArray().adminPassword;
      this.adminType = globals.getAdminDataArray().adminType;
      this.currentEmployeeId = globals.getAdminDataArray().adminId;
      console.log('globals', globals.getAdminDataArray());
    }
    if (sessionStorage.getItem('userRole') == 'Admin') {
      this.admin = true;
      this.Status = ['pending'];
    }
    if (sessionStorage.getItem('userRole') == 'SuperAdmin') {
      this.Status = ['approved', 'rejected'];
    }

    if (sessionStorage.getItem('employeeId')) {
      this.getUpdateEmployee();
      console.log('Called');
    }
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

  // Add Employee
  register() {
    console.log(this.adminName);
    let admin = {
      adminName: this.adminName,
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
      adminType: this.adminType,
    };
    this.http
      .post('http://localhost:8080/api/v1/admins/create', admin, {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        console.log(response);
        alert('Admin Added Successfully');
        this.getAllAdmins();

        this.adminName = '';
        this.adminEmail = '';
        this.adminPassword = '';
        this.adminType = '';
      });
  }

  // Update Employee

  updateAdmin() {
    let admin = {
      adminId: this.currentEmployeeId,
      adminName: this.adminName,
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
      adminType: this.adminType,
    };
    this.http
      .put('http://localhost:8080/api/v1/admins/updateAdmins', admin, {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        console.log(response);
        alert('Admin Updated Successfully');
        this.getAllAdmins();

        this.adminName = '';
        this.adminEmail = '';
        this.adminPassword = '';
        this.adminType = '';
        this.saveButtonName = 'Save';
      });
  }

  save() {
    if (this.currentEmployeeId == '') {
      this.register();
    } else {
      this.updateAdmin();
    }
  }
  clear() {}

  getUpdateEmployee() {
    this.http
      .get('http://localhost:8080/api/v1/employee/getAllEmployee')
      .subscribe((response: any) => {
        console.log('all employees', response);
        this.EmployeeUpdateArray = response.filter(
          (employee: any) =>
            employee.employeeId == sessionStorage.getItem('employeeId')
        );
        console.log('EmployeeUpdateArray', this.EmployeeUpdateArray);
        this.employeeName = this.EmployeeUpdateArray[0].employeeName;
        this.employeeEmail = this.EmployeeUpdateArray[0].employeeEmail;
        this.employeeAddress = this.EmployeeUpdateArray[0].employeeAddress;
        this.mobileNumber = this.EmployeeUpdateArray[0].mobileNumber;
        this.employeePassword = this.EmployeeUpdateArray[0].employeePassword;
      });
  }

  update() {
    let employee = {};

    if (sessionStorage.getItem('userRole') == 'SuperAdmin') {
      employee = {
        employeeId: sessionStorage.getItem('employeeId'),
        employeeName: this.employeeName,
        employeeEmail: this.employeeEmail,
        employeeAddress: this.employeeAddress,
        mobileNumber: this.mobileNumber,
        employeePassword: this.employeePassword,
        adminStatus: 'approved',
      };
    } else {
      employee = {
        employeeId: sessionStorage.getItem('employeeId'),
        employeeName: this.employeeName,
        employeeEmail: this.employeeEmail,
        employeeAddress: this.employeeAddress,
        mobileNumber: this.mobileNumber,
        employeePassword: this.employeePassword,
        adminStatus: 'pending',
      };
    }

    this.http
      .put('http://localhost:8080/api/v1/employee/updateEmployee', employee, {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        console.log(response);
        alert('Employee Updated Successfully');
        this.getUpdateEmployee();

        this.employeeName = '';
        this.employeeEmail = '';
        this.saveButtonName = 'Save';
        sessionStorage.removeItem('employeeId');
      });
  }
}
