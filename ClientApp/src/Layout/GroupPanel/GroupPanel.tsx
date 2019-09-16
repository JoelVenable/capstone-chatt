import React, { useState, useEffect, PropsWithChildren } from "react";
import {
  Drawer,
  Typography,
  withWidth,
  IconButton,
  Hidden,
  Divider,
  Container
} from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import { ChevronLeft } from "@material-ui/icons";
import useGroupPanelStyles from "./useGroupPanelStyles";
import { useAuthContext } from "../../Context/useAuthContext";
import clsx from "clsx";
import Navbar from "../Navbar/Navbar";
import GroupListComponent from "./GroupListComponent";
import AddGroupUser from "./AddGroupUser/AddGroupUser";
import AddGroup from "./AddGroup/AddGroup";

interface Props extends WithWidth {}

const GroupPanel: React.FC<PropsWithChildren<Props>> = ({
  width,
  children
}: PropsWithChildren<Props>) => {
  const {
    status: { isAuthenticated }
  } = useAuthContext();

  const classes = useGroupPanelStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [variant, setVariant] = useState<"persistent" | "temporary">(
    "temporary"
  );
  const [update, setUpdate] = useState<number>(Math.random());

  const hideDrawer = () => setExpanded(false);
  const showDrawer = () => setExpanded(true);

  useEffect(() => {
    const wide = width === "md" || width === "lg" || width === "xl";
    if (wide) setVariant("persistent");
    if (!wide) hideDrawer();
    if (isAuthenticated && wide) showDrawer();
  }, [width, isAuthenticated]);

  return (
    <>
      <Drawer
        open={expanded}
        variant={variant}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={hideDrawer}
        ModalProps={{
          keepMounted: true,
          hideBackdrop: false
        }}>
        <div className={classes.drawerHeader}>
          <Typography variant="h6">Groups</Typography>
          <Hidden mdUp>
            <IconButton onClick={hideDrawer}>
              <ChevronLeft />
            </IconButton>
          </Hidden>
        </div>
        <Divider />
        <GroupListComponent update={update} setUpdate={setUpdate} />
        <Divider />
        <AddGroupUser update={update} setUpdate={setUpdate} />
        <Divider />
        <AddGroup update={update} setUpdate={setUpdate} />
      </Drawer>
      <Navbar drawerExpanded={expanded} showDrawer={showDrawer} />
      <Container
        className={clsx(classes.content, {
          [classes.contentShift]: expanded
        })}>
        {children}
      </Container>
    </>
  );
};

export default withWidth()(GroupPanel);
