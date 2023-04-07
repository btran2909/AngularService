import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEMS_DECLARATIONS } from './declarations';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [...ITEMS_DECLARATIONS],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
