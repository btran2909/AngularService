import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailEditorComponent } from './email-editor.component';
import { EmailEditorDetailComponent } from './email-editor-detail/email-editor-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: EmailEditorComponent }]),
    RouterModule.forChild([{ path: ':id', component: EmailEditorDetailComponent }]),
  ],
  exports: [RouterModule],
})
export class EmailEditorRoutingModule { }
