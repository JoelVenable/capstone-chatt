"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("../../Context/AuthContext");
var AuthenticatedRoute = function (_a) {
    var path = _a.path, exact = _a.exact, component = _a.component, render = _a.render;
    var _b = React.useContext(AuthContext_1.AuthContext).status, isAuthenticated = _b.isAuthenticated, authResolving = _b.authResolving;
    if (authResolving)
        return React.createElement(React.Fragment, null, " ");
    return React.createElement(react_router_dom_1.Route, { path: path, exact: exact, component: component });
};
exports.default = AuthenticatedRoute;
//# sourceMappingURL=AuthenticatedRoute.js.map