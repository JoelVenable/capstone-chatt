import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Grid, withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import AddMessage from "../../Components/AddMessage/AddMessage";
import { messageManager } from "../../DataAccess/messageManager";
import styled from "@emotion/styled";
import MessageItem from "../../Components/MessageItem/MessageItem";

const MessageContainer = styled.div`
  height: calc(100vh - 64px - 56px - 48px);
  overflow-y: scroll;
`;

interface Props {
  groupId: string;
}

const Homepage: React.FC<Props> = ({ groupId }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchMessages = async () => {
    if (groupId !== "") {
      const newMessages = await messageManager.getAll(groupId);

      setMessages(newMessages);
    }
  };

  useEffect(() => {
    (async () => {
      fetchMessages();
    })();
  }, [groupId]);

  return (
    <>
      <MessageContainer>
        {messages.map(m => (
          <MessageItem message={m} key={m.id} />
        ))}
      </MessageContainer>

      <AddMessage groupId={groupId} />
    </>
  );
};

export default withWidth()(Homepage);
