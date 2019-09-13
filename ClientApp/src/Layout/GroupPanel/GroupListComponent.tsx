import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../Context/useAuthContext";
import { groupManager } from "../../DataAccess/groupManager";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Group } from "@material-ui/icons";

const GroupListComponent: React.FC = () => {
  const {
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    console.log("hello from useEffect side panel");
    if (isAuthenticated && !authResolving) {
      (async () => {
        const data = await groupManager.getAll();
        console.log(data);
        setGroups(data);
      })();
    } else setGroups([]);
  }, [isAuthenticated, authResolving]);

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
