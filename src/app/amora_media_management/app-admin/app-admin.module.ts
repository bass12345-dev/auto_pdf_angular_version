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


@NgModule({
  declarations: [
    AppAdminComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class AppAdminModule { }
