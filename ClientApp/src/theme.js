"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
// Example color scheme
// #009688 (teal)
// #65BF99
// #CDC084
// #C8945B
// #BC4D45
exports.myColors = {
    white: "#E7F6FD",
    medBlue: '#10A0E3',
    medDarkBlue: '#0C7CB0',
    darkBlue: '#074663',
    lightGrey: '#BAC6CC',
    darkGrey: '#5C6366',
    error: '#E82741'
};
var theme = styles_1.createMuiTheme({
    breakpoints: {
        values: {
            // default sm: 600, md: 960, lg: 1280, lg: 1920
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: exports.myColors.medDarkBlue,
        },
        secondary: {
            main: exports.myColors.lightGrey,
        },
        error: {
            main: exports.myColors.error
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        }
    }
});
exports.default = theme;
//# sourceMappingURL=theme.js.map