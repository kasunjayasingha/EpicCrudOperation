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
  adminOption = ['SuperAdmin', 'Admin'];

  adminName: string = '';
  adminEmail: string = '';
  adminPassword: string = '';
  adminType: string = '';

  currentEmployeeId = '';

  AdminArray: any[] = [];

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      // UsernameValidators.shouldBeUnique,
    ]),
    password: new FormControl('', Validators.required),
  });

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
}
