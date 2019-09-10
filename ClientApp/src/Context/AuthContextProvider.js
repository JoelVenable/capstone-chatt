"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AuthContext_1 = require("./AuthContext");
var AuthContextProvider = function (_a) {
    var children = _a.children;
    var reducer = function (state, actions) {
        return state;
    };
    var _b = React.useReducer(reducer, {
        isAuthenticated: false,
        authResolving: true,
        userEmail: undefined
    }), status = _b[0], setStatus = _b[1];
    React.useEffect(function () {
        //  resolve auth
    }, []);
    var actions = React.useMemo(function () { return ({
        signIn: function (cred) { },
        signUp: function (cred) { },
        signOut: function () { },
        changePassword: function (old, newp) { }
    }); }, []);
    return (React.createElement(AuthContext_1.AuthContext.Provider, { value: { status: status, actions: actions } }, children));
};
exports.AuthContextProvider = AuthContextProvider;
//# sourceMappingURL=AuthContextProvider.js.map