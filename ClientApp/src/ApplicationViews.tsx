import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./Components/Auth/AuthenticatedRoute/AuthenticatedRoute";
import Homepage from "./Views/Homepage/Homepage";
import { routeDefinitions } from "./Router/routeDefinitions";
import LoginView from "./Views/Login/Login";
import GroupPanel from "./Layout/GroupPanel/GroupPanel";
import GroupDetail from "./Views/GroupDetail/GroupDetail";

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
          <AuthenticatedRoute
            path={routeDefinitions.GROUP_DETAIL}
            render={props => (
              <GroupDetail groupName={props.match.params.groupName} />
            )}
          />
          <Route path={routeDefinitions.LOGIN} component={LoginView} />
        </Switch>
      </GroupPanel>
    </>
  );
};
