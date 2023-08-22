import { EmployeeComponent } from './components/employee/employee.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { ShowAdminComponent } from './components/show-admin/show-admin.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardContentComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'dashboard', component: DashboardContentComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // {
      //   path: 'adminPanel',
      //   component: AdminPanelComponent,
      //   children: [
      //     { path: '', component: AddAdminComponent },
      //     { path: 'showAdmin', component: ShowAdminComponent },
      //   ],
      // },
      {
        path: 'adminPanel',

        loadChildren: () =>
          import('./components/admin-panel/admin-panel.module').then(
            (m) => m.AdminPanelModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
