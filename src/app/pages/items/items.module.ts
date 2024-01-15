import { NgModule } from '@angular/core';
import { ITEMS_DECLARATIONS } from './declarations';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [...ITEMS_DECLARATIONS],
  imports: [
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
