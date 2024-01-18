import { LayoutActionType, LayoutActions } from './layout.action';
import { LayoutState, initialLayoutState } from './layout.state';

export function layoutReducer(
  state = initialLayoutState,
  action: LayoutActions
): LayoutState {
  switch (action.type) {
    case LayoutActionType.LoadMenuItems: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case LayoutActionType.LoadMenuItemsSuccess: {
      return {
        ...state,
        loading: false,
        menuItems: action.payload,
        error: null,
      };
    }

    case LayoutActionType.LoadMenuItemsFail: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
