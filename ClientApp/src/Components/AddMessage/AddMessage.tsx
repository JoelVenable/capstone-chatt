import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const AddMessage = () => {
  const [messageText, setMessageText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
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
