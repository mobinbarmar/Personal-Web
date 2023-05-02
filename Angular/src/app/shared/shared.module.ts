import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';



@NgModule({
  declarations: [
    Card1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card1Component
  ]
})
export class SharedModule { }
