import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductDetailRoutingModule,
    GalleriaModule,
    TabViewModule,
    RatingModule,
    ProgressBarModule,
    SelectButtonModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
  ]
})
export class ProductDetailModule { }
