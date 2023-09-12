import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UHomeComponent } from './u-home.component';



@NgModule({
  declarations: [UHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UHomeComponent
  ]
})
export class UHomeModule { }
