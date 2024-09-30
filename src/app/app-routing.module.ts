import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AutoPdfFormComponent } from './main/auto-pdf-form/auto-pdf-form.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,
  },
  {
    path:'pdf-generator',component:AutoPdfFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
