interface IGroup {
  name: string;
  isPrivate: boolean;
  isProtected: boolean;
  groupUsers: IApplicationUser[];
  messages: IMessage[];
}

export class Group {
  name: string;
  isPrivate: boolean;
  isProtected: boolean;
  groupUsers: User[];
  messages: Message[];
}
