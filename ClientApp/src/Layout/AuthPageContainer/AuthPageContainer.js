"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var WelcomeBanner_1 = require("../WelcomeBanner/WelcomeBanner");
var AuthPageContainer = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement(WelcomeBanner_1.WelcomeBanner, null),
        React.createElement(core_1.Container, { maxWidth: "xs", style: { marginTop: '2rem' } }, children)));
};
exports.AuthPageContainer = AuthPageContainer;
//# sourceMappingURL=AuthPageContainer.js.map