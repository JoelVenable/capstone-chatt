import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import { groupManager } from "../../DataAccess/groupManager";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Group } from "@material-ui/icons";

interface Props {
  update: number;
  setUpdate: Function;
}

const GroupListComponent: React.FC<Props> = ({ update, setUpdate }: Props) => {
  const {
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    (async () => {
      const data = await groupManager.getAll();
      console.log("hello from fetch call");
      setGroups(data);
    })();
  }, [isAuthenticated, authResolving, update]);

  return (
    <>
      <List>
        {groups.map(group => (
          <ListItem button key={group.id}>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GroupListComponent;
