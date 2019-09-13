import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./Components/Auth/AuthenticatedRoute/AuthenticatedRoute";
import Homepage from "./Views/Homepage/Homepage";
import { routeDefinitions } from "./Router/routeDefinitions";
import LoginView from "./Views/Login/Login";
import GroupPanel from "./Layout/GroupPanel/GroupPanel";

export const ApplicationViews: React.FC = () => {
  return (
    <>
      <GroupPanel>
        <Switch>
          <AuthenticatedRoute
            path={routeDefinitions.HOMEPAGE}
            component={Homepage}
            exact
          />
          <Route path={routeDefinitions.LOGIN} component={LoginView} />
        </Switch>
      </GroupPanel>
    </>
  );
};
