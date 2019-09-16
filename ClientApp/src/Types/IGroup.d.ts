interface IGroup {
  name: string;
  isPrivate: boolean;
  isProtected: boolean;
  groupUsers?: IApplicationUser[];
  messages?: IMessage[];
  id?: string;
  dateCreated?: string;
}
