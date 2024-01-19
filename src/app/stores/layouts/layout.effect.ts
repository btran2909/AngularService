import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { MenuItem } from 'src/app/shared/constants/apis/menu-item.route';
import { IMenuItemDto } from 'src/app/shared/models/menu-items/menu-item-dto.model';
import { LayoutActions } from './layout.action';

@Injectable()
export class MenuItemEffects {
  loadMenuItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.loadMenuItems),
      switchMap(() =>
        this.baseService.get<IMenuItemDto[]>(MenuItem.GET_GetMenuItems).pipe(
          map((data) => LayoutActions.loadMenuItemsSuccess({ data })),
          catchError((error) => of(LayoutActions.loadMenuItemsFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private baseService: BaseService<IMenuItemDto>
  ) {}
}
