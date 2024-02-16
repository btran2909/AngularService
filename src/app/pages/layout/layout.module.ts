import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ]
})
export class LayoutModule { }
