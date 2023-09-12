import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdDashboardComponent } from './board-admin/ad-dashboard/ad-dashboard.component';
import { AdHomeComponent } from './board-admin/ad-home/ad-home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home copy/home.component';
import { HomeeComponent } from './home/homee.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AppointmentComponent } from './board-admin/appointment/appointment.component';
import { CalanderComponent } from './board-admin/calander/calander.component';
import { CauseComponent } from './board-admin/cause/cause.component';
import { ContactComponent } from './board-admin/contact/contact.component';
import { CourtComponent } from './board-admin/court/court.component';
import { DairyComponent } from './board-admin/dairy/dairy.component';
import { OtherComponent } from './board-admin/other/other.component';
import { SettingComponent } from './board-admin/setting/setting.component';
import { TaskComponent } from './board-admin/task/task.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home1', component: HomeeComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'home2', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent,
    children: [
      {
        path: 'u-dash',
        component: AdDashboardComponent
       },
      {
        path: 'u-home',
        component: AdHomeComponent
      }
    ] },
  { path: 'mod', component: BoardModeratorComponent },


  { path: 'admin', component: BoardAdminComponent,
  children: [
    {
      path: 'ad-dash',
      component: AdDashboardComponent
     },
    {
      path: 'ad-home',
      component: AdHomeComponent
    },
    {path:'cause',
    component:CauseComponent
  },
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

  ] },



  { path:'test',component:TestComponent},
  { path: 'home', component:FirstPageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'guest', component:GuestComponent},
  {path:'**', component:NotFoundComponent},

  // {
  //   path: 'u-home',
  //   loadChildren: () => import('../app/board-user/board-user-routing.module').then(mod => mod.BoardUserRoutingModule),
  // },
  // {
  //   path: 'u-dash',
  //   component: BoardUserComponent,
  //   loadChildren: () => BoardUserComponent
  // },



  // {
  //   path: 'ad-home',
  //   loadChildren: () => import('../app/board-admin/board-admin-routing.module').then(mod => mod.BoardUserRoutingModule),
  // },

  // {
  //   path: 'ad-dash',
  //   component: BoardAdminComponent,
  //   loadChildren: () => BoardAdminComponent
  // },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
