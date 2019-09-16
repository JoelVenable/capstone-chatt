import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import { Avatar } from "@material-ui/core";
import { myColors } from "../../theme";
import UserAvatar from "./UserAvatar";
import moment from "moment";

const MessageContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentDiv = styled.div`
  margin-left: 0.8rem;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  message: IMessage;
}

const MessageItem: React.FC<Props> = ({ message }: Props) => {
  const sender = message.messageSender;
  if (sender === undefined) return <>No sender data... </>;

  const name = `${sender.firstName} ${sender.lastName}`;
  const initials = sender.firstName.slice(0, 1) + sender.lastName.slice(0, 1);

  console.log(message);
  return (
    <Card
      style={{
        maxWidth: 700,
        margin: ".6rem"
      }}>
      <MessageContainerDiv>
        <UserAvatar
          name={name}
          initials={initials}
          imageUrl={sender.imageUrl}
        />
        <ContentDiv>
          <HeaderDiv>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="caption" style={{ marginLeft: ".8rem" }}>
              {moment(message.dateCreated).format("MMM Do YYYY, h:mm:ss a")}
            </Typography>
            
          </HeaderDiv>
          <p>{message.text}</p>
        </ContentDiv>
      </MessageContainerDiv>
    </Card>
  );
};

export default MessageItem;
