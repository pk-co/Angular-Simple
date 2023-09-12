import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardAdminRoutingModule } from './board-admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AdSidenavComponent } from './ad-sidenav/ad-sidenav.component';
import { AdHomeComponent } from './ad-home/ad-home.component';
import { AdHeaderComponent } from './ad-header/ad-header.component';
import { AdDashboardComponent } from './ad-dashboard/ad-dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { AdDashboardModule } from './ad-dashboard/ad-dashboard.module';
//import { ClientComponent } from './client/client.component';
//import { ConfirmDailogComponent } from './client/confirm-dailog/confirm-dailog.component';
import { ConfirmDailogComponent } from './ad-dashboard/confirm-dailog/confirm-dailog.component';
import { CauseComponent } from './cause/cause.component';
import { ContactComponent } from './contact/contact.component';
import { DairyComponent } from './dairy/dairy.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TaskComponent } from './task/task.component';
import { CourtComponent } from './court/court.component';
import { DocumentComponent } from './document/document.component';
import { ProfileComponent } from '../profile/profile.component';
import { CalanderComponent } from './calander/calander.component';
import { OtherComponent } from './other/other.component';
//import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AdSidenavComponent,ContactComponent, CauseComponent,CauseComponent,AdHomeComponent, AdHeaderComponent,AdDashboardComponent, SettingComponent, ConfirmDailogComponent,CauseComponent,ContactComponent,DairyComponent,AppointmentComponent,TaskComponent,CourtComponent,DocumentComponent,ProfileComponent,CalanderComponent,SettingComponent,OtherComponent],
  imports: [
    CommonModule,
    BoardAdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    BoardAdminModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule

  ]
})
export class BoardAdminModule { }
