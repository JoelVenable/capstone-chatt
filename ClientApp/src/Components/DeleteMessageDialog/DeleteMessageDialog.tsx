import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText
} from "@material-ui/core";
import { messageManager } from "../../DataAccess/messageManager";
import { myColors } from "../../theme";
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
  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = () => openControl(false);

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    setLoading(true);
    const { response } = await messageManager.delete(`/${messageId}`);
    if (response === "SUCCESS") {
      handleClose();
      setUpdate(Math.random());
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Message</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this message?
          <p>{startingText}</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={loading}
          variant="contained"
          style={{ backgroundColor: myColors.error }}>
          Delete Message
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteMessageDialog;
