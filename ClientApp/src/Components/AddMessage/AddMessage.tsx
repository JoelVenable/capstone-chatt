import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { messageManager } from "../../DataAccess/messageManager";

interface Props {
  groupId: string;
}

const AddMessage: React.FC<Props> = ({ groupId }: Props) => {
  const [messageText, setMessageText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    await messageManager.post({});
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto"
      }}>
      <form style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          id="messageText"
          label="What do you think?"
          variant="outlined"
          value={messageText}
          onChange={handleChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: "18%", marginLeft: ".6rem" }}>
          Send it!
        </Button>
      </form>
    </div>
  );
};

export default AddMessage;
