import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminComponent } from './app-admin.component';

const routes: Routes = [{ path: '', component: AppAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
