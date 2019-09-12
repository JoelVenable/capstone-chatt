import { hot } from "react-hot-loader/root";
import * as React from "react";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import { ApplicationViews } from "./ApplicationViews";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <ApplicationViews />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default hot(App);

//        <Navbar />
//    <AuthContextProvider>
//        <h1>Hello</h1>

//    </AuthContextProvider>
