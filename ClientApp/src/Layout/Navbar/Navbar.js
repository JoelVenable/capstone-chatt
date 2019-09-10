"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var AuthContext_1 = require("../../Context/AuthContext");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: { flexGrow: 1 }
    });
});
var Navbar = function () {
    var classes = useStyles({});
    var _a = React.useContext(AuthContext_1.AuthContext), isAuthenticated = _a.status.isAuthenticated, signOut = _a.actions.signOut;
    return (React.createElement("div", { className: classes.root },
        React.createElement(core_1.AppBar, { position: "static", color: "primary" },
            React.createElement(core_1.Toolbar, null,
                React.createElement(core_1.Typography, { variant: "h4", className: classes.title }, "Chatt"),
                React.createElement(core_1.Button, { color: "inherit" }, "Login")))));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map