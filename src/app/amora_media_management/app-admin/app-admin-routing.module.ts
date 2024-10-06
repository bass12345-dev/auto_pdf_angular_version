import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminComponent } from './app-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageEmployeesComponent } from './pages/manage-employees/manage-employees.component';
import { AllPdfComponent } from './pages/all-pdf/all-pdf.component';

const routes: Routes = [
  { path: '', component: AppAdminComponent,
    children : [
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'manage-employees',component:ManageEmployeesComponent
      },
      {
        path:'all-pdf',component:AllPdfComponent
      }

      
    ]



   },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
