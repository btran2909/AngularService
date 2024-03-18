export interface IBaseEntity {
  id: string;
  isDeleted: boolean;
  deleteId?: string;
  deletionTime?: Date;
  creatorId?: string;
  creationTime?: Date;
  lastModificationTime?: Date;
  lastModifierId?: string;
  extraProperties?: string;
}
