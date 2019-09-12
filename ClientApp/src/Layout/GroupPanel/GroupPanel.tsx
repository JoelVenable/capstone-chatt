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
  const [expanded, setExpanded] = useState<boolean>(false);
  const [variant, setVariant] = useState<"permanent" | "temporary">(
    "temporary"
  );
  const [expandAction, setExpandAction] = useState<
    EventHandler<SyntheticEvent>
  >((e: SyntheticEvent) => setExpanded(!expanded));

  useEffect(() => {
    if (isAuthenticated) {
      if (width === "xs" || width === "sm") {
        setVariant("temporary");
        setExpandAction((e: SyntheticEvent) => setExpanded(!expanded));
      } else {
        setVariant("permanent");
        setExpandAction((e: SyntheticEvent) => {});
        setExpanded(true);
      }
    } else {
      setVariant("temporary");
      setExpanded(false);
    }
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
        ModalProps={{
          hideBackdrop: variant === "permanent"
        }}>
        <Hidden mdUp>
          <div className={classes.drawerHeader}>
            <IconButton onClick={expandAction}>
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
