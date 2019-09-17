import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { routeDefinitions } from "./Router/routeDefinitions";
import LoginView from "./Views/Login/Login";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { useAuthContext } from "./Context/AuthContext/useAuthContext";
import Navbar from "./Layout/Navbar/Navbar";

export const ApplicationViews: React.FC = () => {
  const {
    status: { isAuthenticated }
  } = useAuthContext();

  return (
    <>
      {isAuthenticated ? (
        <MainLayout />
      ) : (
        <>
          <Navbar drawerExpanded={false} />
          <Switch>
            <Route path={routeDefinitions.LOGIN} component={LoginView} />
          </Switch>
        </>
      )}
    </>
  );
};
