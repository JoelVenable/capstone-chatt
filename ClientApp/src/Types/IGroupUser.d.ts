interface IGroupUser {
  id?: string;
  groupId: string;
  group?: IGroup;
  userId?: string;
  user?: IApplicationUser;
  dateCreated?: string;
  dateActive?: string;
}
