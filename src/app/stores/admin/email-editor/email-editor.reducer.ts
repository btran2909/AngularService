import { createReducer, on } from '@ngrx/store';
import {
  LoadEmailEditors,
  LoadEmailEditorsFail,
  LoadEmailEditorsSuccess,
  UpdateEmailEditor,
  UpdateEmailEditorFail,
} from './email-editor.action';
import { EmailEditorState } from './email-editor.state';

export const EmailEditorReducer = createReducer(
  EmailEditorState,
  on(LoadEmailEditors, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoadEmailEditorsSuccess, (state, { data }) => ({
    ...state,
    listData: data,
    mailTemplates: data,
    loading: false,
  })),
  on(LoadEmailEditorsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UpdateEmailEditor, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UpdateEmailEditorFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
