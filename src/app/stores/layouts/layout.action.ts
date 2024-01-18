import { Action } from '@ngrx/store';
import { IMenuItemDto } from 'src/app/shared/models/menu-items/menu-item-dto.model';

export enum LayoutActionType {
  LoadMenuItems = '[LAYOUT] Load menu items',
  LoadMenuItemsSuccess = '[LAYOUT] Load menu items Success',
  LoadMenuItemsFail = '[LAYOUT] Load menu items Fail',
}

export class LoadMenuItems implements Action {
  readonly type = LayoutActionType.LoadMenuItems;
}

export class LoadMenuItemsSuccess implements Action {
  readonly type = LayoutActionType.LoadMenuItemsSuccess;
  constructor(public payload: IMenuItemDto[]) {}
}

export class LoadMenuItemsFail implements Action {
  readonly type = LayoutActionType.LoadMenuItemsFail;
  constructor(public payload: any) {}
}

export type LayoutActions =
  | LoadMenuItems
  | LoadMenuItemsSuccess
  | LoadMenuItemsFail;
