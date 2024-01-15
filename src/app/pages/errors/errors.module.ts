import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ERRORS_DECLARATIONS } from './declarations';
import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  declarations: [...ERRORS_DECLARATIONS],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
