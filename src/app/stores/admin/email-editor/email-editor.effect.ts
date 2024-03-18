import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { EmailEditor } from 'src/app/shared/constants/apis/index.api';
import { IListDto, IResultDto } from 'src/app/shared/models';
import { IEmailEditorDto } from 'src/app/shared/models/email-editors/email-editor-dto.model';
import {
  DeleteEmailEditor,
  DeleteEmailEditorFail,
  LoadEmailEditors,
  LoadEmailEditorsFail,
  LoadEmailEditorsSuccess,
  UpdateEmailEditor,
  UpdateEmailEditorFail,
} from './email-editor.action';

@Injectable()
export class EmailEditorEffects {
  constructor(
    private actions$: Actions,
    private baseService: BaseService<IEmailEditorDto>
  ) {}

  LoadEmailEditors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadEmailEditors),
      switchMap(() =>
        this.baseService
          .get<IResultDto<IListDto<IEmailEditorDto>>>(EmailEditor.GET_GetEmailEditors)
          .pipe(
            map((response) => LoadEmailEditorsSuccess({ data: response.data })),
            catchError((error) => of(LoadEmailEditorsFail({ error })))
          )
      )
    )
  );

  UpdateEmailEditor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateEmailEditor),
      switchMap((action: any) =>
        this.baseService
          .update<IResultDto<IEmailEditorDto>>(
            EmailEditor.PUT_Update,
            action.data
          )
          .pipe(
            map((_) => LoadEmailEditors()),
            catchError((error) => of(UpdateEmailEditorFail({ error })))
          )
      )
    )
  );

  DeleteEmailEditor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteEmailEditor),
      switchMap((action: any) =>
        this.baseService
          .delete<IResultDto<IEmailEditorDto>>(
            EmailEditor.DELETE_Remove,
            action.id
          )
          .pipe(
            map((_) => LoadEmailEditors()),
            catchError((error) => of(DeleteEmailEditorFail({ error })))
          )
      )
    )
  );
}
