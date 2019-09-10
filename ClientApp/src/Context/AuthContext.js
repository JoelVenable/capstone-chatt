"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.AuthContext = React.createContext({
    status: {
        isAuthenticated: false,
        authResolving: true,
        userEmail: undefined
    },
    actions: {
        signIn: function (credentials) { },
        signUp: function (username, password) { },
        signOut: function () { },
        changePassword: function (oldPassword, newPassword) { }
    }
});
//# sourceMappingURL=AuthContext.js.map