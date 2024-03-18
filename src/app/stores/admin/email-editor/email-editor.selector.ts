import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmailEditorState } from './email-editor.state';

export const SelectorEmailEditorState =
  createFeatureSelector<EmailEditorState>('EmailEditor');

export const SelectorEmailEditors = createSelector(
  SelectorEmailEditorState,
  (state) => state.mailTemplates
);

export const SelectorEmailEditorLoading = createSelector(
  SelectorEmailEditorState,
  (state) => state.loading
);

export const SelectorEmailEditorError = createSelector(
  SelectorEmailEditorState,
  (state) => state.error
);
