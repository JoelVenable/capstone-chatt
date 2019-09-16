import teal from "@material-ui/core/colors/teal";

import { createMuiTheme } from "@material-ui/core/styles";

// Example color scheme
// #009688 (teal)
// #65BF99
// #CDC084
// #C8945B
// #BC4D45

export const myColors = {
  white: "#E7F6FD",
  medBlue: "#10A0E3",
  medDarkBlue: "#0C7CB0",
  darkBlue: "#074663",
  lightGrey: "#BAC6CC",
  darkGrey: "#5C6366",
  error: "#E82741"
};

const theme = createMuiTheme({
  breakpoints: {
    values: {
      // default sm: 600, md: 960, lg: 1280, lg: 1920
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    h1: {
      color: myColors.medDarkBlue
    }
  },
  palette: {
    primary: {
      main: myColors.medDarkBlue
    },
    secondary: {
      main: myColors.lightGrey
    },
    error: {
      main: myColors.error
    },
    common: {
      black: myColors.darkGrey,
      white: myColors.white
    },
    text: {
      primary: myColors.darkBlue,
      disabled: myColors.lightGrey
    },
    background: {
      paper: myColors.white,
      default: myColors.white
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

export default theme;
