export interface IMenuItemDto {
  id: string;
  isDeleted: boolean;
  deleteId?: string;
  deletionTime?: Date;
  creatorId?: string;
  creationTime?: Date;
  lastModificationTime?: Date;
  lastModifierId?: string;
  extraProperties: string;
  label: string;
  icon: string;
  routerLink: string;
  parentMenuItemId?: string;
  parentMenuItem?: IMenuItemDto;
  childMenuItems?: IMenuItemDto[];
}
