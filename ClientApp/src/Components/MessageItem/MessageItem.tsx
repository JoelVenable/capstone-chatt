import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import UserAvatar from "./UserAvatar";
import moment from "moment";
import EditMessageControl from "./EditMessageControl";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";

const MessageContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentDiv = styled.div`
  margin-left: 0.8rem;
`;

const HeaderOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface Props extends WithWidth {
  message: IMessage;
  setUpdate: Function;
}

const MessageItem: React.FC<Props> = ({ message, width, setUpdate }: Props) => {
  const sender = message.messageSender;
  if (sender === undefined || !message.id) return <>No sender data... </>;

  const name = `${sender.firstName} ${sender.lastName}`;
  const initials = sender.firstName.slice(0, 1) + sender.lastName.slice(0, 1);

  const postTime = moment(message.dateCreated);
  const now = moment(Date.now());

  const dateText = postTime.isBefore(now, "day")
    ? postTime.format("MMM Do YYYY, h:mm:ss a")
    : `Today, ${postTime.format("h:mm:ss a")}`;

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
          <HeaderOuter>
            <div
              style={
                width !== "xs"
                  ? { display: "flex", alignItems: "center" }
                  : undefined
              }>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="caption" style={{ marginLeft: ".8rem" }}>
                {dateText}
              </Typography>
            </div>
            <EditMessageControl
              senderId={sender.id}
              messageId={message.id}
              setUpdate={setUpdate}
              messageText={message.text}
              isDeleted={message.isDeleted}
            />
          </HeaderOuter>

          {message.isDeleted ? <p>deleted</p> : <p>{message.text}</p>}
        </ContentDiv>
      </MessageContainerDiv>
    </Card>
  );
};

export default withWidth()(MessageItem);
