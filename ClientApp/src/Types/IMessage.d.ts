interface IMessage {
  id?: string;
  dateCreated?: string;
  senderId?: string;
  sender?: IApplicationUser;
  groupId: string;
  group?: IGroup;
  text: string;
  thread?: IMessage[];
  parentMessageId?: string;
  parentMessage?: IMessage;
  reactions?: IReaction[];
  isDeleted?: boolean;
}
