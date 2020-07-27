import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';


import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';
import {AppAdminRoutingModule} from './app-routing.module'
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    AppAdminRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports:[AdminLayoutComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AdminLayoutModule {}