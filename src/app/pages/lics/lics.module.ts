import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicsRoutingModule } from './lics-routing.module';
import { LICS_DECLARATIONS } from './declarations';

@NgModule({
  declarations: [...LICS_DECLARATIONS],
  imports: [
    CommonModule,
    LicsRoutingModule
  ]
})
export class LicsModule { }
