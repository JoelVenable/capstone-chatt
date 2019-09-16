import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { routeDefinitions } from "../../../Router/routeDefinitions";
const AuthenticatedRoute: React.FC<RouteProps> = ({
  path,
  exact,
  component,
  render
}: RouteProps) => {
  const {
    status: { isAuthenticated, authResolving }
  } = React.useContext(AuthContext);

  if (authResolving) return <> </>;

  if (!isAuthenticated) return <Redirect to={routeDefinitions.LOGIN} />;

  return (
    <Route path={path} exact={exact} component={component} render={render} />
  );
};

export default AuthenticatedRoute;
