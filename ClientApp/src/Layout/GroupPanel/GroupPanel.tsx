import React, {
  useState,
  useEffect,
  PropsWithChildren,
  SyntheticEvent,
  EventHandler
} from "react";
import {
  Drawer,
  Typography,
  withWidth,
  IconButton,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container
} from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import { groupManager } from "../../DataAccess/groupManager";
import { ChevronLeft } from "@material-ui/icons";
import useGroupPanelStyles from "./useGroupPanelStyles";
import { useAuthContext } from "../../Context/useAuthContext";
import clsx from "clsx";
import Navbar from "../Navbar/Navbar";
import GroupListComponent from "./GroupListComponent";

interface Props extends WithWidth {}

const GroupPanel: React.FC<PropsWithChildren<Props>> = ({
  width,
  children
}: PropsWithChildren<Props>) => {
  const {
    status: { isAuthenticated }
  } = useAuthContext();

  const classes = useGroupPanelStyles();
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <>
      <Drawer
        open={expanded}
        variant="persistent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={undefined}
        ModalProps={{
          keepMounted: true,
          hideBackdrop: undefined
        }}>
        <Hidden mdUp>
          <div className={classes.drawerHeader}>
            <IconButton onClick={undefined}>
              <ChevronLeft />
            </IconButton>
          </div>
        </Hidden>
        <List>
          <ListItem>
            <ListItemText primary="Groups" />
          </ListItem>
        </List>
        <Divider />
        <GroupListComponent />
      </Drawer>
      <Navbar drawerExpanded={expanded} />
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
