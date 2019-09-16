import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton
} from "@material-ui/core";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { routeDefinitions } from "../../Router/routeDefinitions";
import clsx from "clsx";
import useNavbarStyles from "./useNavBarStyle";
import { Menu } from "@material-ui/icons";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";

interface Props extends RouteComponentProps {
  drawerExpanded: boolean;
  showDrawer?: Function;
}

const Navbar: React.FC<Props> = ({
  drawerExpanded,
  history,
  showDrawer
}: Props) => {
  const classes = useNavbarStyles({});
  const {
    actions: { signOut },
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const handleLogout = () => {
    signOut();
    history.push(routeDefinitions.LOGIN);
  };

  const handleShowControlClick = (e: React.SyntheticEvent) => {
    if (showDrawer) showDrawer();
  };

  const showControl =
    isAuthenticated && !authResolving && !drawerExpanded && showDrawer;

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
                <Menu />
              </IconButton>
            ) : null}
          </Hidden>
          <Typography variant="h4" className={classes.title}>
            Chatt
          </Typography>
          {isAuthenticated ? (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button
              component={Link}
              to={routeDefinitions.LOGIN}
              color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
