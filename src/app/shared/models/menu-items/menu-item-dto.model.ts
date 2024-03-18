import { IBaseEntity } from "..";

export interface IMenuItemDto extends IBaseEntity {
  label: string;
  icon: string;
  routerLink: string;
  parentMenuItemId?: string;
  parentMenuItem?: IMenuItemDto;
  childMenuItems?: IMenuItemDto[];
}
