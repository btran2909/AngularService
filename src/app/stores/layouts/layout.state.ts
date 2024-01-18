import { IMenuItemDto } from "src/app/shared/models/menu-items/menu-item-dto.model";

export interface LayoutState {
  menuItems: IMenuItemDto[];
  loading: boolean;
  error: any;
}

export const layoutState: LayoutState = {
  menuItems: [],
  loading: false,
  error: null
};
