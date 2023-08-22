import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  saveButtonName = 'Save';
  adminOption = ['superAdmin', 'admin'];

  adminName: string = '';
  adminEmail: string = '';
  adminPassword: string = '';
  adminType: string = '';

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      // UsernameValidators.shouldBeUnique,
    ]),
    password: new FormControl('', Validators.required),
  });

  save() {}
  clear() {}
}
