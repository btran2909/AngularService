import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { EmailEditorEffects, EmailEditorReducer } from 'src/app/stores/admin/email-editor';
import { EmailEditorDetailComponent } from './email-editor-detail/email-editor-detail.component';
import { EmailEditorRoutingModule } from './email-editor-routing.module';
import { EmailEditorComponent } from './email-editor.component';

@NgModule({
  declarations: [EmailEditorComponent, EmailEditorDetailComponent],
  imports: [
    CommonModule,
    EmailEditorRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    DialogModule,
    StoreModule.forFeature('EmailEditor', EmailEditorReducer),
    EffectsModule.forFeature([EmailEditorEffects]),
    TableModule,
    InputTextModule,
    PaginatorModule
  ]
})
export class EmailEditorModule { }
