import { createAction, props } from '@ngrx/store';
import { IMenuItemDto, IMenuItemUpdateDto } from 'src/app/shared/models';

export const loadMenuItems = createAction('[Menu Item] Load Menu Items');
export const loadMenuItemsSuccess = createAction(
  '[Menu Item] Load Menu Items Success',
  props<{ data: IMenuItemDto[] }>()
);
export const loadMenuItemsFail = createAction(
  '[Menu Item] Load Menu Items Fail',
  props<{ error: any }>()
);

export const updateMenuItem = createAction(
  '[Menu Item] Update Menu Item',
  props<{ data: IMenuItemUpdateDto }>()
);
export const updateMenuItemFail = createAction(
  '[Menu Item] Update Menu Item Fail',
  props<{ error: any }>()
);

export const deleteMenuItem = createAction(
  '[Menu Item] Delete Menu Item',
  props<{ id: string }>()
);
export const deleteMenuItemFail = createAction(
  '[Menu Item] Delete Menu Item Fail',
  props<{ error: any }>()
);

export const LayoutActions = {
  loadMenuItems,
  loadMenuItemsSuccess,
  loadMenuItemsFail,
  updateMenuItem,
  updateMenuItemFail,
  deleteMenuItem,
  deleteMenuItemFail,
};
