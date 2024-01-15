export interface IPagedResultDto<T> {
  totalCount?: number;
  items?: T[] | undefined;
}
