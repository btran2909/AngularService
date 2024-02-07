import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EmailEditorRoutingModule } from './email-editor-routing.module';
import { EmailEditorComponent } from './email-editor.component';

@NgModule({
  declarations: [EmailEditorComponent],
  imports: [
    CommonModule,
    EmailEditorRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    DialogModule
  ]
})
export class EmailEditorModule { }
