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
import { AuthContext } from "../../Context/AuthContext";
import { Menu } from "@material-ui/icons";
interface Props extends RouteComponentProps {
  drawerExpanded: boolean;
  showDrawer: Function;
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
  } = React.useContext(AuthContext);

  const handleLogout = () => {
    signOut();
    history.push(routeDefinitions.LOGIN);
  };
  return (
    <div
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerExpanded
      })}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Hidden mdUp>
            {isAuthenticated && !authResolving && !drawerExpanded ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => showDrawer()}
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
