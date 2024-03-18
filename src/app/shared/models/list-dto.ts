export interface IListDto<T> {
  page?: number;
  size?: number;
  total?: number;
  items?: T[] | undefined;
}
