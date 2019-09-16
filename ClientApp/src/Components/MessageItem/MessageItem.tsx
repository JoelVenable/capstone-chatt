import React from "react";
import { Card, CardContent } from "@material-ui/core";

interface Props {
  message: IMessage;
}

const MessageItem: React.FC<Props> = ({ message }: Props) => {
  return (
    <Card style={{ maxWidth: 700, margin: ".6rem" }}>
      <CardContent>{message.text}</CardContent>
    </Card>
  );
};

export default MessageItem;
