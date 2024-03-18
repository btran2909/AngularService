import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { MenuItem } from 'src/app/shared/constants/apis/menu-item.route';
import { IMenuItemDto, IResultDto } from 'src/app/shared/models';
import {
  DeleteMenuItem,
  DeleteMenuItemFail,
  LoadMenuItems,
  LoadMenuItemsFail,
  LoadMenuItemsSuccess,
  UpdateMenuItem,
  UpdateMenuItemFail,
} from './layout.action';

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
    private baseService: BaseService<IMenuItemDto>
  ) {}

  LoadMenuItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadMenuItems),
      switchMap(() =>
        this.baseService
          .get<IResultDto<IMenuItemDto[]>>(MenuItem.GET_GetMenuItems)
          .pipe(
            map((response) => LoadMenuItemsSuccess({ data: response.data })),
            catchError((error) => of(LoadMenuItemsFail({ error })))
          )
      )
    )
  );

  UpdateMenuItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateMenuItem),
      switchMap((action: any) =>
        this.baseService
          .update<IResultDto<IMenuItemDto>>(MenuItem.PUT_Update, action.data)
          .pipe(
            map((_) => LoadMenuItems()),
            catchError((error) => of(UpdateMenuItemFail({ error })))
          )
      )
    )
  );

  DeleteMenuItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteMenuItem),
      switchMap((action: any) =>
        this.baseService
          .delete<IResultDto<IMenuItemDto>>(MenuItem.DELETE_Remove, action.id)
          .pipe(
            map((_) => LoadMenuItems()),
            catchError((error) => of(DeleteMenuItemFail({ error })))
          )
      )
    )
  );
}
