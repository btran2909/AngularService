import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailEditorComponent } from './email-editor.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: EmailEditorComponent }]),
  ],
  exports: [RouterModule],
})
export class EmailEditorRoutingModule { }
