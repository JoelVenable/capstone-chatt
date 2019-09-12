import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./Components/Auth/AuthenticatedRoute/AuthenticatedRoute";
import Homepage from "./Views/Homepage/Homepage";
import { routeDefinitions } from "./Router/routeDefinitions";
import LoginView from "./Views/Login/Login";

export const ApplicationViews: React.FC = () => {
  return (
    <>
      <AuthenticatedRoute
        path={routeDefinitions.HOMEPAGE}
        component={Homepage}
        exact
      />
      <Route path={routeDefinitions.LOGIN} component={LoginView} />
    </>
  );
};
