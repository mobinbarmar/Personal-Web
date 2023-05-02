import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    Card1Component,
    LogoComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card1Component,
    LogoComponent,
    NavComponent
  ]
})
export class SharedModule { }
