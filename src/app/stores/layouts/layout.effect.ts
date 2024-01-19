import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { MenuItem } from 'src/app/shared/constants/apis/menu-item.route';
import { IMenuItemDto, IResultDto } from 'src/app/shared/models';
import { LayoutActions } from './layout.action';

@Injectable()
export class MenuItemEffects {
  loadMenuItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.loadMenuItems),
      switchMap(() =>
        this.baseService
          .get<IResultDto<IMenuItemDto[]>>(MenuItem.GET_GetMenuItems)
          .pipe(
            map((response) =>
              LayoutActions.loadMenuItemsSuccess({ data: response.data })
            ),
            catchError((error) =>
              of(LayoutActions.loadMenuItemsFail({ error }))
            )
          )
      )
    )
  );

  updateMenuItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.updateMenuItem),
      switchMap((action: any) =>
        this.baseService
          .update<IResultDto<IMenuItemDto>>(
            MenuItem.PUT_Update,
            action.data
          )
          .pipe(
            map((_) => LayoutActions.loadMenuItems()),
            catchError((error) =>
              of(LayoutActions.updateMenuItemFail({ error }))
            )
          )
      )
    )
  );

  deleteMenuItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.deleteMenuItem),
      switchMap((action: any) =>
        this.baseService
          .delete<IResultDto<IMenuItemDto>>(MenuItem.DELETE_Remove, action.id)
          .pipe(
            map((_) => LayoutActions.loadMenuItems()),
            catchError((error) =>
              of(LayoutActions.deleteMenuItemFail({ error }))
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private baseService: BaseService<IMenuItemDto>
  ) {}
}
