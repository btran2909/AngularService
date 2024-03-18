import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout.state';

export const SelectorLayoutState =
  createFeatureSelector<LayoutState>('layout');

export const SelectorMenuItems = createSelector(
  SelectorLayoutState,
  (state) => state.menuItems
);

export const SelectorLayoutLoading = createSelector(
  SelectorLayoutState,
  (state) => state.loading
);

export const SelectorLayoutError = createSelector(
  SelectorLayoutState,
  (state) => state.error
);
