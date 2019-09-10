"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AuthContextProvider_1 = require("./Context/AuthContextProvider");
var Navbar_1 = require("./Layout/Navbar/Navbar");
var ApplicationViews_1 = require("./ApplicationViews");
var react_router_dom_1 = require("react-router-dom");
var theme_1 = require("./theme");
var styles_1 = require("@material-ui/styles");
var App = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(AuthContextProvider_1.AuthContextProvider, null,
            React.createElement(styles_1.ThemeProvider, { theme: theme_1.default },
                React.createElement(Navbar_1.default, null),
                React.createElement(ApplicationViews_1.ApplicationViews, null)))));
};
exports.default = App;
//        <Navbar />
//    <AuthContextProvider>
//        <h1>Hello</h1>
//    </AuthContextProvider>
//# sourceMappingURL=App.js.map