import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../Context/useAuthContext";
import { groupManager } from "../../DataAccess/groupManager";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Group } from "@material-ui/icons";
const GroupListComponent: React.FC = () => {
  const {
    status: { isAuthenticated }
  } = useAuthContext();

  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const data = await groupManager.getAll();
        setGroups(data);
      })();
    } else setGroups([]);
  }, [isAuthenticated]);

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
