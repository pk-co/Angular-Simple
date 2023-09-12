import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { UHomeComponent } from './u-home/u-home.component';

const routes: Routes = [

  {path:'', redirectTo:'user', pathMatch:'full'},
  {path:'u-dash',component:UDashboardComponent },
  {path:'u-home',component:UHomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardUserRoutingModule { }
