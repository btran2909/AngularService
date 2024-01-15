export interface IMenuItemDto {
  title: string;
  link?: string;
  show?: boolean;
  level?: number;
  children?: IMenuItemDto[];
}
