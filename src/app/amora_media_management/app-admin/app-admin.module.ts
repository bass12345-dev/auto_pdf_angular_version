import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AppAdminComponent } from './app-admin.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageEmployeesComponent } from './pages/manage-employees/manage-employees.component';
import { AllPdfComponent } from './pages/all-pdf/all-pdf.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { EmployeeTableComponent } from './pages/manage-employees/sections/employee-table/employee-table.component';
import { PdfTableComponent } from './pages/all-pdf/sections/pdf-table/pdf-table.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PdfGeneratorComponent } from './pages/pdf-generator/pdf-generator.component';
import { PdfLimitedTableComponent } from './pages/pdf-generator/sections/pdf-limited-table/pdf-limited-table.component';
import { GenerateFormComponent } from './pages/pdf-generator/sections/generate-form/generate-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppAdminComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    ManageEmployeesComponent,
    AllPdfComponent,
    EmployeeTableComponent,
    PdfTableComponent,
    PdfGeneratorComponent,
    PdfLimitedTableComponent,
    GenerateFormComponent
  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    HttpClientModule

  ]
})
export class AppAdminModule { }
