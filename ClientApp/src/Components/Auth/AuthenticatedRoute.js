import * as React from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
const AuthenticatedRoute = ({ path, exact, component, render }) => {
    const { status: { isAuthenticated, authResolving } } = React.useContext(AuthContext);
    if (authResolving)
        return React.createElement(React.Fragment, null, " ");
    return React.createElement(Route, { path: path, exact: exact, component: component });
};
export default AuthenticatedRoute;
//# sourceMappingURL=AuthenticatedRoute.js.map