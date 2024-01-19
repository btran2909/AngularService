import { createAction, props } from '@ngrx/store';
import { IMenuItemDto } from 'src/app/shared/models/menu-items/menu-item-dto.model';

export const loadMenuItems = createAction('[Menu] Load Menu Items');
export const loadMenuItemsSuccess = createAction(
  '[Menu] Load Menu Items Success',
  props<{ data: IMenuItemDto[] }>()
);
export const loadMenuItemsFail = createAction(
  '[Menu] Load Menu Items Fail',
  props<{ error: any }>()
);

export const LayoutActions = {
  loadMenuItems,
  loadMenuItemsSuccess,
  loadMenuItemsFail,
};
