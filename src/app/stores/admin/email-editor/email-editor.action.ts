import { createAction, props } from '@ngrx/store';
import { IListDto } from 'src/app/shared/models';
import { IEmailEditorDto } from 'src/app/shared/models/email-editors/email-editor-dto.model';
import { IEmailEditorUpdateDto } from 'src/app/shared/models/email-editors/email-editor-update-dto.model';

export const LoadEmailEditors = createAction('[Email Editor] Load Email Editors');
export const LoadEmailEditorsSuccess = createAction(
  '[Email Editor] Load Email Editors Success',
  props<{ data: IListDto<IEmailEditorDto> }>()
);
export const LoadEmailEditorsFail = createAction(
  '[Email Editor] Load Email Editors Fail',
  props<{ error: any }>()
);

export const UpdateEmailEditor = createAction(
  '[Email Editor] Update Email Editor',
  props<{ data: IEmailEditorUpdateDto }>()
);
export const UpdateEmailEditorFail = createAction(
  '[Email Editor] Update Email Editor Fail',
  props<{ error: any }>()
);

export const DeleteEmailEditor = createAction(
  '[Email Editor] Delete Email Editor',
  props<{ id: string }>()
);
export const DeleteEmailEditorFail = createAction(
  '[Email Editor] Delete Email Editor Fail',
  props<{ error: any }>()
);
