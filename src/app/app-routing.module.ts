import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AutoPdfFormComponent } from './main/auto-pdf-form/auto-pdf-form.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'pdf-generator',component:AutoPdfFormComponent
  },
  { path: 'amora_media_management/app-admin', loadChildren: () => import('./amora_media_management/app-admin/app-admin.module').then(m => m.AppAdminModule) },
  {
    path : '**', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
