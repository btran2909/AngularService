import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class LayoutModule { }
