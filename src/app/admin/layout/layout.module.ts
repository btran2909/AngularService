import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { LAYOUT_DECLARATIONS } from './declarations';
import { layoutReducer } from 'src/app/stores/layouts/layout.reducer';
import { MenuItemEffects } from 'src/app/stores/layouts/layout.effect';

@NgModule({
  declarations: LAYOUT_DECLARATIONS,
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    ButtonModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    StoreModule.forFeature('layout', layoutReducer),
    EffectsModule.forFeature([MenuItemEffects]),
  ],
})
export class LayoutModule {}