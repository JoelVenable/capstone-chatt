import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withWidth
} from "@material-ui/core";
import clsx from "clsx";
import useNavbarStyles from "./useNavBarStyle";
import { Apps } from "@material-ui/icons";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import { WithWidth } from "@material-ui/core/withWidth";
import EditUserDialog from "../EditUserDialog/EditUserDialog";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

interface Props extends WithWidth {
  drawerExpanded: boolean;
  showDrawer?: Function;
}

const Navbar: React.FC<Props> = ({
  drawerExpanded,
  showDrawer,
  width
}: Props) => {
  const classes = useNavbarStyles({});
  const {
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const [settingsOpen, setSettingsOpen] = React.useState<boolean>(true);

  const handleSettingsClose = () => setSettingsOpen(false);

  const handleShowControlClick = (e: React.SyntheticEvent) => {
    if (showDrawer) showDrawer();
  };

  const showControl =
    isAuthenticated && !authResolving && !drawerExpanded && showDrawer;

  console.log(width);
  return (
    <div
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerExpanded
      })}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Hidden mdUp>
            {showControl ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={handleShowControlClick}
                aria-label="menu">
                <Apps />
              </IconButton>
            ) : null}
          </Hidden>
          <Typography variant="h4" className={classes.title}>
            Chatt
          </Typography>
          {width === "xs" ? (
            <MobileMenu setSettingsOpen={setSettingsOpen} />
          ) : (
            <DesktopMenu />
          )}
        </Toolbar>
      </AppBar>
      <EditUserDialog open={settingsOpen} handleClose={handleSettingsClose} />
    </div>
  );
};

export default withWidth()(Navbar);
