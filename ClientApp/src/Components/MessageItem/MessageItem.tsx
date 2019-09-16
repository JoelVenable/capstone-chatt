import React from "react";
import { Chip } from "@material-ui/core";

interface Props {
  message: IMessage;
}

const MessageItem: React.FC<Props> = ({ message }: Props) => {
  return <Chip>{message.text}</Chip>;
};

export default MessageItem;
