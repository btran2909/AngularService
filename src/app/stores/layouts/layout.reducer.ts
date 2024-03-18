import { createReducer, on } from '@ngrx/store';
import {
  LoadMenuItems,
  LoadMenuItemsFail,
  LoadMenuItemsSuccess,
  UpdateMenuItem,
  UpdateMenuItemFail,
} from './layout.action';
import { LayoutState } from './layout.state';

export const LayoutReducer = createReducer(
  LayoutState,
  on(LoadMenuItems, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoadMenuItemsSuccess, (state, { data }) => ({
    ...state,
    menuItems: data,
    loading: false,
  })),
  on(LoadMenuItemsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UpdateMenuItem, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UpdateMenuItemFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
