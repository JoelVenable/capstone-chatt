import React, { useState, useEffect, SyntheticEvent } from "react";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import { groupManager } from "../../DataAccess/groupManager";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Group } from "@material-ui/icons";

interface Props {
  update: number;
  setUpdate: Function;
  setActiveGroup: Function;
}

const GroupListComponent: React.FC<Props> = ({
  update,
  setUpdate,
  setActiveGroup
}: Props) => {
  const {
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const [groups, setGroups] = useState<IGroup[]>([]);

  const handleGroupClick = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    setActiveGroup(e.currentTarget.id);
  };

  useEffect(() => {
    (async () => {
      const data = await groupManager.getAll();
      setGroups(data);
    })();
  }, [isAuthenticated, authResolving, update]);

  return (
    <>
      <List>
        {groups.map(group => (
          <ListItem
            button
            key={group.id}
            id={group.id}
            onClick={handleGroupClick}>
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
