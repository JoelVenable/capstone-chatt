import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./Components/Auth/AuthenticatedRoute/AuthenticatedRoute";
import Homepage from "./Views/Homepage/Homepage";
import { routeDefinitions } from "./Router/routeDefinitions";
import LoginView from "./Views/Login/Login";
import GroupDetail from "./Views/GroupDetail/GroupDetail";
import MainLayout from "./Layout/MainLayout/MainLayout";

export const ApplicationViews: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Switch>
          <AuthenticatedRoute
            path={routeDefinitions.HOMEPAGE}
            component={Homepage}
            exact
          />
          <AuthenticatedRoute
            path={routeDefinitions.GROUP_DETAIL}
            render={props => (
              <GroupDetail groupName={props.match.params.groupName} />
            )}
          />
          <Route path={routeDefinitions.LOGIN} component={LoginView} />
        </Switch>
      </MainLayout>
    </>
  );
};
