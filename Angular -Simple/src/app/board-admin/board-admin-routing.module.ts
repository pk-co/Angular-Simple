import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AdDashboardComponent } from './ad-dashboard/ad-dashboard.component';
import { AdHomeComponent } from './ad-home/ad-home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalanderComponent } from './calander/calander.component';
import { CauseComponent } from './cause/cause.component';
import { ContactComponent } from './contact/contact.component';
import { CourtComponent } from './court/court.component';
import { DairyComponent } from './dairy/dairy.component';
import { OtherComponent } from './other/other.component';
import { SettingComponent } from './setting/setting.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'', redirectTo:'admin',pathMatch:'full'},
  {path:'ad-dash', component:AdDashboardComponent},
  {path:'ad-home', component:AdHomeComponent},
  {path:'cause', component:CauseComponent},
  {path:'contact', component:ContactComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'task',component:TaskComponent},
  {path:'court',component:CourtComponent},
  {path:'document',component:Document},
  {path:'ad-profile',component:ProfileComponent},
  {path:'setting',component:SettingComponent},
  {path:'other',component:OtherComponent},
  {path:'dairy',component:DairyComponent},
  {path:'calander',component:CalanderComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardAdminRoutingModule { }
