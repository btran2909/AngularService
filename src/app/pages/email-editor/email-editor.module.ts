import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { EmailEditorRoutingModule } from './email-editor-routing.module';
import { EmailEditorComponent } from './email-editor.component';

@NgModule({
  declarations: [EmailEditorComponent],
  imports: [
    CommonModule,
    EmailEditorRoutingModule,
    ButtonModule
  ]
})
export class EmailEditorModule { }
