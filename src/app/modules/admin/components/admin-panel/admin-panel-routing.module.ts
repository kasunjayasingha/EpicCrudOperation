import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { ShowAdminComponent } from '../show-admin/show-admin.component';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: '', component: AddAdminComponent },
      { path: 'show', component: ShowAdminComponent },
      { path: 'add', component: AddAdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
