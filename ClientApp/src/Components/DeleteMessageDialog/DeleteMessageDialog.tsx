import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormGroup,
  FormControlLabel,
  DialogActions,
  Button
} from "@material-ui/core";
import { myColors } from "../../theme";
import { messageManager } from "../../DataAccess/messageManager";

interface Props {
  open: boolean;
  openControl: Function;
  messageId: string;
  startingText: string;
  setUpdate: Function;
}
const DeleteMessageDialog: React.FC<Props> = ({
  open,
  openControl,
  messageId,
  startingText,
  setUpdate
}: Props) => {
  const [text, setText] = useState<string>(startingText);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = () => openControl(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    setLoading(true);
    const { response } = await messageManager.put({
      id: messageId,
      text
    });
    if (response === "SUCCESS") {
      handleClose();
      setUpdate(Math.random());
    }
    setUpdate(Math.random());
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a Group</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Edit your message"
            value={text}
            style={{ backgroundColor: myColors.white }}
            onChange={handleChange}
            disabled={loading}
            id="groupName"
            variant="filled"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={loading}>
          Delete Message
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteMessageDialog;
