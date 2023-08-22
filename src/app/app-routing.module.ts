// import { AddAdminComponent } from './add-admin/add-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'employee', component: EmployeeComponent },
  // { path: 'adminPanel', component: AdminPanelComponent },
  // { path: 'adminPanel/addAdmin', component: AddAdminComponent },
  // { path: 'adminPanel/showAdmin', component: ShowAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
