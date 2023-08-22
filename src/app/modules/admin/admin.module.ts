import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ShowAdminComponent } from './components/show-admin/show-admin.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';

@NgModule({
  declarations: [
    AddAdminComponent,
    DashboardComponent,
    EmployeeComponent,
    ShowAdminComponent,
    DashboardContentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
