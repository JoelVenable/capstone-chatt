import React, { useState } from "react";
import {
  Drawer,
  Typography,
  withWidth,
  IconButton,
  Hidden,
  Divider
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import useGroupPanelStyles from "../MainLayout/useGroupPanelStyles";

import GroupListComponent from "./GroupListComponent";
import AddGroupUser from "./AddGroupUser/AddGroupUser";
import AddGroup from "./AddGroup/AddGroup";

interface Props {
  drawerExpanded: boolean;
  variant: "persistent" | "temporary";
  hideDrawer: Function;
  setActiveGroup: Function;
}

const GroupPanel: React.FC<Props> = ({
  drawerExpanded,
  variant,
  hideDrawer,
  setActiveGroup
}: Props) => {
  const [update, setUpdate] = useState<number>(Math.random());
  const classes = useGroupPanelStyles();

  const handleClose = () => hideDrawer();

  return (
    <>
      <Drawer
        open={drawerExpanded}
        variant={variant}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true,
          hideBackdrop: false
        }}>
        <div className={classes.drawerHeader}>
          <Typography variant="h6">Groups</Typography>
          <Hidden mdUp>
            <IconButton onClick={handleClose}>
              <ChevronLeft />
            </IconButton>
          </Hidden>
        </div>
        <Divider />
        <GroupListComponent
          update={update}
          setUpdate={setUpdate}
          setActiveGroup={setActiveGroup}
        />
        <Divider />
        <AddGroupUser update={update} setUpdate={setUpdate} />
        <Divider />
        <AddGroup setUpdate={setUpdate} />
      </Drawer>
    </>
  );
};

export default withWidth()(GroupPanel);
