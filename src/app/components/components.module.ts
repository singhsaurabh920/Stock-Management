import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    // FooterComponent,
    //  NavbarComponent, 
    //  SidebarComponent
    ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    // FooterComponent,
    // NavbarComponent,
    // SidebarComponent
  ]
})
export class ComponentsModule { }
