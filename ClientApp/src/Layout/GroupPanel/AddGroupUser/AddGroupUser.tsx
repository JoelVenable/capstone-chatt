import React, { useEffect, useState } from "react";
import { groupManager } from "../../../DataAccess/groupManager";
import { Select, MenuItem, IconButton, Typography } from "@material-ui/core";
import { useAuthContext } from "../../../Context/AuthContext/useAuthContext";
import { myColors } from "../../../theme";
import { Add } from "@material-ui/icons";
import { groupUserManager } from "../../../DataAccess/groupUserManager";

interface Props {
  update: number;
  setUpdate: Function;
}

const AddGroupUser: React.FC<Props> = ({ update, setUpdate }: Props) => {
  const {
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const [groups, setGroups] = useState<IGroup[]>([]);
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const updateGroups = async () => {
    const newGroups = await groupManager.getOthers();
    setGroups(newGroups);
  };

  useEffect(() => {
    updateGroups();
  }, [isAuthenticated, authResolving, update]);

  useEffect(() => {
    setDisabled(groups.length > 0);
  }, [groups.length]);

  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setValue(e.target.value as string);
  };

  const handleSubmit: React.FormEventHandler = async () => {
    if (value === "") return;
    const { response } = await groupUserManager.post({ groupId: value });
    if (response === "SUCCESS") setUpdate(Math.random());
  };

  return (
    <>
      <div style={{ marginLeft: "1rem" }}>
        <Typography variant="body1">Follow a group</Typography>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Select
          fullWidth
          disabled={disabled}
          style={{ backgroundColor: myColors.white, marginLeft: "1rem" }}
          value={value}
          onChange={handleChange}>
          {groups.map(g => (
            <MenuItem value={g.id} key={g.id}>
              {g.name}
            </MenuItem>
          ))}
        </Select>
        <IconButton
          color="secondary"
          onClick={handleSubmit}
          disabled={disabled}>
          <Add />
        </IconButton>
      </div>
    </>
  );
};

export default AddGroupUser;
