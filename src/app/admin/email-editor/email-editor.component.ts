import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Table } from 'primeng/table';
import { IListDto } from 'src/app/shared/models';
import { IEmailEditorDto } from 'src/app/shared/models/email-editors/email-editor-dto.model';
import {
  EmailEditorState,
  LoadEmailEditors,
  SelectorEmailEditorError,
  SelectorEmailEditorLoading,
  SelectorEmailEditors,
} from 'src/app/stores/admin/email-editor';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrl: './email-editor.component.scss',
})
export class EmailEditorComponent implements OnInit {
  loading: boolean = true;
  mailTemplates: IListDto<IEmailEditorDto> | null;
  visibleContentJson: boolean = false;
  visibleTemplateContent: boolean = false;

  emailEditors$ = this.emailEditorStore.pipe(select(SelectorEmailEditors));
  loading$ = this.emailEditorStore.pipe(select(SelectorEmailEditorLoading));
  error$ = this.emailEditorStore.pipe(select(SelectorEmailEditorError));

  constructor(private emailEditorStore: Store<EmailEditorState>) {}

  ngOnInit() {
    this.emailEditorStore.dispatch(LoadEmailEditors());
    this.emailEditors$.subscribe(
      (mailTemplates: IListDto<IEmailEditorDto> | null) => {
        console.log('mailTemplates: ', mailTemplates);
        this.mailTemplates = mailTemplates;
        this.loading = false;
      }
    );
    this.loading$.subscribe(
      (loading: boolean) => {
        console.log('loading: ', loading);
        this.loading = loading;
      }
    );
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(
    status: string
  ): 'success' | 'info' | 'warning' | 'danger' | string | undefined {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      default:
        return undefined;
    }
  }
}
