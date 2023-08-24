import { Component } from '@angular/core';
import { Globals } from '../Globals';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css'],
})
export class ShowAdminComponent {
  adminName: string = '';
  adminEmail: string = '';
  adminPassword: string = '';
  adminType: string = '';

  currentEmployeeId = '';
  AdminArray: any[] = [];
  EmployeeArray: any[] = [];

  setUpdateClick: boolean = false;
  emp: any;
  adminsPrivilege: boolean = false;

  // adminPassArray: any[] = [];

  constructor(
    private http: HttpClient,
    private globals: Globals,
    private router: Router
  ) {
    this.getAllAdmins();
    this.emp = sessionStorage.getItem('userRole') == 'Admin';
    console.log(this.emp);

    if (this.emp) {
      this.getAllEmployeeAdmin();
    } else {
      this.getAllEmployeeSuperAdmin();
    }

    if (sessionStorage.getItem('userRole') == 'Admin') {
      this.adminsPrivilege = true;
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
  // Get All Employees
  getAllEmployeeAdmin() {
    console.log('get all requesting employee');
    this.http
      .get('http://localhost:8080/api/v1/employee/getAllEmployee')
      .subscribe((response: any) => {
        console.log('all employees', response);
        this.EmployeeArray = response.filter(
          (employee: any) => employee.adminStatus === 'request'
        );
      });
  }
  getAllEmployeeSuperAdmin() {
    console.log('get all pending employee');
    this.http
      .get('http://localhost:8080/api/v1/employee/getAllEmployee')
      .subscribe((response: any) => {
        console.log('all employees', response);
        this.EmployeeArray = response.filter(
          (employee: any) => employee.adminStatus === 'pending'
        );
      });
  }

  setUpdate(data: any) {
    // this.saveButtonName = 'Update';

    this.adminName = data.adminName;
    this.adminEmail = data.adminEmail;
    this.adminPassword = data.adminPassword;
    this.adminType = data.adminType;
    this.currentEmployeeId = data.adminId;

    let adminPassArray = {
      adminName: this.adminName,
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
      adminType: this.adminType,
      adminId: this.currentEmployeeId,
      setUpdateClick: true,
    };

    this.globals.AdminDataArray = adminPassArray;
    this.router.navigate(['admin/adminPanel']);
  }

  setUpdateEmployee(data: any) {
    sessionStorage.setItem('employeeId', data.employeeId);
    this.router.navigate(['admin/adminPanel']);
  }

  // Delete Employee
  setDelete(data: any) {
    this.http
      .delete(
        'http://localhost:8080/api/v1/admins/deleteAdmin' + '/' + data.adminId,
        {
          responseType: 'text',
        }
      )
      .subscribe((response: any) => {
        console.log(response);
        alert('Admin Deleted Successfully');
        this.getAllAdmins();
      });
  }

  setDeleteEmployee(data: any) {}
}
