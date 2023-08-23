import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  AdminDataArray: any = [];
  getAdminDataArray() {
    return this.AdminDataArray;
  }

  private userRole: String = '';

  setUserRole(role: String) {
    this.userRole = role;
  }

  getUserRole() {
    return this.userRole;
  }
}
