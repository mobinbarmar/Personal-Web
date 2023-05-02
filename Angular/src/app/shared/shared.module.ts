import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    Card1Component,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card1Component,
    LogoComponent
  ]
})
export class SharedModule { }
