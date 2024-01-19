import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout.state';

export const selectMenuItemState = createFeatureSelector<LayoutState>('layout');

export const selectMenuItems = createSelector(
  selectMenuItemState,
  (state) => state.menuItems
);

export const selectMenuItemLoading = createSelector(
  selectMenuItemState,
  (state) => state.loading
);

export const selectMenuItemError = createSelector(
  selectMenuItemState,
  (state) => state.error
);

export const LayoutSelectors = {
  selectMenuItems,
  selectMenuItemLoading,
  selectMenuItemError,
};
