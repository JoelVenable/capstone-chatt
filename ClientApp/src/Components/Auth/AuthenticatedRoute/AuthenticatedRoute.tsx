import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

const AuthenticatedRoute: React.FC<RouteProps> = ({
  path,
  exact,
  component
}: RouteProps) => {
  const {
    status: { isAuthenticated, authResolving }
  } = React.useContext(AuthContext);

  if (authResolving) return <> </>;

  return <Route path={path} exact={exact} component={component} />;
};

export default AuthenticatedRoute;
