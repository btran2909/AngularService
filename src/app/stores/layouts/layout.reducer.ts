import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from './layout.action';
import { initialLayoutState } from './layout.state';

export const layoutReducer = createReducer(
  initialLayoutState,
  on(LayoutActions.loadMenuItems, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LayoutActions.loadMenuItemsSuccess, (state, { data }) => ({
    ...state,
    menuItems: data,
    loading: false,
  })),
  on(LayoutActions.loadMenuItemsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(LayoutActions.updateMenuItem, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LayoutActions.updateMenuItemFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
