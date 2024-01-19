export interface IResultDto<T> {
  success: boolean;
  data: T;
  message: string;
}
