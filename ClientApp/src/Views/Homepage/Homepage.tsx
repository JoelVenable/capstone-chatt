import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Grid, withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import AddMessage from "../../Components/AddMessage/AddMessage";
import { messageManager } from "../../DataAccess/messageManager";

interface Props {
  groupId: string
}

const Homepage: React.FC<Props> = ({ groupId }: Props) => {

  const [messages, setMessages ] = useState<IMessage[]>([])



  useEffect(() => {
    (async () => {
      const newMessages = await messageManager.getAll()

    })
  }, [groupId])


  return <AddMessage />;
};

export default withWidth()(Homepage);
