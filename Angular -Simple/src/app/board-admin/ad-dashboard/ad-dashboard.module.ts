import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDashboardComponent } from './ad-dashboard.component';
import { ConfirmDailogComponent } from './confirm-dailog/confirm-dailog.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdDashboardComponent, ConfirmDailogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  exports: [
    AdDashboardComponent
  ]
})
export class AdDashboardModule { }
