import React, { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { routeDefinitions } from "../../Router/routeDefinitions";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import { Menu as MenuIcon } from "@material-ui/icons";

interface Props extends RouteComponentProps {
  setSettingsOpen: Function;
}

const MobileMenu: React.FC<Props> = ({ history, setSettingsOpen }: Props) => {
  const {
    actions: { signOut },
    status: { isAuthenticated, authResolving }
  } = useAuthContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen: boolean = Boolean(anchorEl);

  function showSettingsMenu(event: React.MouseEvent<HTMLElement>) {
    setSettingsOpen(true);
  }

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    signOut();
    history.push(routeDefinitions.LOGIN);
  };

  if (isAuthenticated && !authResolving)
    return (
      <div>
        <IconButton
          onClick={handleMenu}
          color="inherit"
          aria-label="User settings"
          aria-controls="menu-appbar"
          aria-haspopup="true">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={menuOpen}
          onClose={handleClose}>
          <MenuItem onClick={showSettingsMenu}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  else
    return (
      <Button component={Link} to={routeDefinitions.LOGIN} color="inherit">
        Login
      </Button>
    );
};

export default withRouter(MobileMenu);
