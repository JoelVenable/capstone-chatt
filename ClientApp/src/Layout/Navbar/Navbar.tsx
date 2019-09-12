import * as React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { routeDefinitions } from "../../Router/routeDefinitions";
import clsx from "clsx";
import useNavbarStyles from "./useNavBarStyle";
import { AuthContext } from "../../Context/AuthContext";

interface Props {
  drawerExpanded: boolean;
}

const Navbar: React.FC<Props> = ({ drawerExpanded }: Props) => {
  const classes = useNavbarStyles({});
  const {
    actions: { signOut },
    status: { isAuthenticated }
  } = React.useContext(AuthContext);

  return (
    <div
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerExpanded
      })}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Chatt
          </Typography>
          {isAuthenticated ? (
            <Button onClick={signOut} color="inherit">
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

export default Navbar;
