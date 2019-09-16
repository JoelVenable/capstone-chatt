import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  FormGroup,
  FormControlLabel,
  Checkbox
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
  const [groupPrivate, setGroupPrivate] = useState<boolean>(false);
  const [groupProtected, setGroupProtected] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (newGroupName.length > 0) setDisabled(false);
    else setDisabled(true);
  }, [newGroupName]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { id, value } = e.currentTarget;
    if (id === "groupName") setNewGroupName(e.currentTarget.value as string);
    if (id === "groupPrivate") setGroupPrivate(!groupPrivate);
    if (id === "groupProtected") setGroupProtected(!groupProtected);
  };

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    const { response } = await groupManager.post({
      name: newGroupName,
      isPrivate: groupPrivate,
      isProtected: groupProtected
    });
    setUpdate(Math.random());
    console.log(response);
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
              disabled={loading}
              id="groupName"
              variant="filled"
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={groupPrivate}
                    color="primary"
                    disabled={loading}
                    checked={groupPrivate}
                    onChange={handleChange}
                    id="groupPrivate"
                  />
                }
                label="Private Group"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={groupProtected}
                    color="primary"
                    checked={groupProtected}
                    onChange={handleChange}
                    id="groupProtected"
                  />
                }
                label="Protected Group"
              />
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={disabled || loading}>
            Add Group
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddGroup;
