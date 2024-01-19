import { ActionReducerMap } from '@ngrx/store';
import { LayoutState } from './layouts/layout.state';
import { layoutReducer } from './layouts/layout.reducer';
import { AttendeesEffects } from './layouts/layout.effect';

export interface SpinnerState {
  isOn: boolean;
}

export interface FromRootState {
  spinner: SpinnerState;
}

export interface EventState {
  menuItems: LayoutState;
}

export interface State extends FromRootState {
  event: EventState;
}

export const reducers: ActionReducerMap<EventState> = {
  menuItems: layoutReducer
};

export const effects: any[] = [AttendeesEffects];
