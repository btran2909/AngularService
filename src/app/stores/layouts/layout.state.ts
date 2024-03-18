import { IMenuItemDto } from "src/app/shared/models";

export interface LayoutState {
  menuItems: IMenuItemDto[];
  loading: boolean;
  error: any;
}

export const LayoutState: LayoutState = {
  menuItems: [],
  loading: false,
  error: null,
};
