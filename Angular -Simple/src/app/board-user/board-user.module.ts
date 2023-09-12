import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardUserRoutingModule } from './board-user-routing.module';
import { UHomeComponent } from './u-home/u-home.component';
import { UHeaderComponent } from './u-header/u-header.component';
import { USidenavComponent } from './u-sidenav/u-sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
//import { USidenavModule } from './u-sidenav/u-sidenav.module';
//import { UHeaderModule } from './u-header/u-header.module';
//import { UDashboardModule } from './u-dashboard/u-dashboard.module';
import { UHomeModule } from './u-home/u-home.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UHomeComponent, UHeaderComponent, USidenavComponent,UDashboardComponent],
  imports: [
    CommonModule,
    BoardUserRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    UHomeModule,

  ],
  
})

export class BoardUserModule { }
