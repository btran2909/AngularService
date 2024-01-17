import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AUTHS_DECLARATIONS } from './declarations';
import { AuthsRoutingModule } from './auths-routing.module';

@NgModule({
  declarations: AUTHS_DECLARATIONS,
  imports: [
    CommonModule,
    AuthsRoutingModule
  ]
})
export class AuthsModule { }
