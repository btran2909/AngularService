import { IBaseEntity } from "..";

export interface IEmailEditorDto extends IBaseEntity {
  templateName: string;
  contentJson: string;
  templateContent: string;
}
