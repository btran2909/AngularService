import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ITEMS_DECLARATIONS } from './declarations';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: ITEMS_DECLARATIONS,
  imports: [
    ItemsRoutingModule,
    ButtonModule
  ]
})
export class ItemsModule { }
