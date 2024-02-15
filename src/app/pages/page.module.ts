import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PageRoutingModule, LayoutModule],
})
export class PageModule {}
