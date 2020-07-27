import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import {DashboardComponent} from '../../pages/dashboard/dashboard.component'
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component'
import {TablesComponent} from '../../pages/tables/tables.component'
import {IconsComponent} from '../../pages/icons/icons.component'
import { AdminLayoutComponent } from './admin-layout.component';
const routes: Routes = [
  {
    path:'',
    component:AdminLayoutComponent
  },
   { path: 'dashboard',      component: DashboardComponent },
   { path: 'user-profile',   component: UserProfileComponent },
   { path: 'tables',         component: TablesComponent },
   { path: 'icons',          component: IconsComponent },
];



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAdminRoutingModule { }
