import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { myColors } from "../../../theme";
import { groupManager } from "../../../DataAccess/groupManager";

interface Props {
  update: number;
  setUpdate: Function;
}

const AddGroup: React.FC<Props> = ({ update, setUpdate }: Props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(true);
  const [newGroupName, setNewGroupName] = useState<string>("");
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setNewGroupName(e.currentTarget.value as string);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const {response} = await groupManager.
  };

  return (
    <>
      <Button fullWidth style={{ color: myColors.white }} onClick={openModal}>
        Add a Group
      </Button>

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Add a Group</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              label="New Group name"
              value={newGroupName}
              style={{ backgroundColor: myColors.white }}
              onChange={handleChange}
              variant="filled"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Group</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddGroup;
