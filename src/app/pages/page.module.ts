import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PAGE_DECLARATIONS } from './declarations';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: PAGE_DECLARATIONS,
  imports: [CommonModule, PageRoutingModule],
})
export class PageModule {}
