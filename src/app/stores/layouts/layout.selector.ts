import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from '..';

export const getEventState = createFeatureSelector<EventState>('event');

export const getMenuItemState = createSelector(
  getEventState,
  (state) => state.menuItems
);

export const getMenuItems = createSelector(
  getMenuItemState,
  (state) => state.menuItems
);
