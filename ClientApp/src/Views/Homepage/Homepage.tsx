import React, { useState, useEffect } from "react";

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
  update: number;
  setUpdate: Function;
}

const Homepage: React.FC<Props> = ({ groupId, update, setUpdate }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (groupId !== "") {
        const newMessages = await messageManager.getAll(groupId);

        setMessages(newMessages);
      }
    };

    (async () => {
      fetchMessages();
    })();
  }, [groupId]);

  return (
    <>
      <MessageContainer>
        {messages.map(m => (
          <MessageItem message={m} key={m.id} setUpdate={setUpdate} />
        ))}
      </MessageContainer>

      <AddMessage groupId={groupId} />
    </>
  );
};

export default Homepage;
