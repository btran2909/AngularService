import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { MenuItem } from 'src/app/shared/constants/apis/menu-item.route';
import { IMenuItemDto } from 'src/app/shared/models/menu-items/menu-item-dto.model';
import {
  LayoutActionType,
  LoadMenuItems,
  LoadMenuItemsFail,
  LoadMenuItemsSuccess,
} from './layout.action';

@Injectable()
export class AttendeesEffects {
  constructor(
    private actions$: Actions,
    private baseService: BaseService<IMenuItemDto>
  ) {}

  @Effect()
  getAttendees$ = this.actions$.pipe(
    ofType(LayoutActionType.LoadMenuItems),
    switchMap((action: LoadMenuItems) =>
      this.baseService.get<IMenuItemDto[]>(MenuItem.GET_GetMenuItems).pipe(
        map((menuItems: IMenuItemDto[]) => new LoadMenuItemsSuccess(menuItems)),
        catchError((error) => of(new LoadMenuItemsFail(error)))
      )
    )
  );
}
