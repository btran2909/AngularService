import { IListDto } from "src/app/shared/models";
import { IEmailEditorDto } from "src/app/shared/models/email-editors/email-editor-dto.model";

export interface EmailEditorState {
  mailTemplates: IListDto<IEmailEditorDto> | null;
  loading: boolean;
  error: any;
}

export const EmailEditorState: EmailEditorState = {
  mailTemplates: null,
  loading: false,
  error: null,
};
