import { createAction, props } from '@ngrx/store';
import { IMenuItemDto, IMenuItemUpdateDto } from 'src/app/shared/models';

export const LoadMenuItems = createAction('[Menu Item] Load Menu Items');
export const LoadMenuItemsSuccess = createAction(
  '[Menu Item] Load Menu Items Success',
  props<{ data: IMenuItemDto[] }>()
);
export const LoadMenuItemsFail = createAction(
  '[Menu Item] Load Menu Items Fail',
  props<{ error: any }>()
);

export const UpdateMenuItem = createAction(
  '[Menu Item] Update Menu Item',
  props<{ data: IMenuItemUpdateDto }>()
);
export const UpdateMenuItemFail = createAction(
  '[Menu Item] Update Menu Item Fail',
  props<{ error: any }>()
);

export const DeleteMenuItem = createAction(
  '[Menu Item] Delete Menu Item',
  props<{ id: string }>()
);
export const DeleteMenuItemFail = createAction(
  '[Menu Item] Delete Menu Item Fail',
  props<{ error: any }>()
);
