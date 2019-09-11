import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

const Homepage: React.FC<RouteComponentProps<any>> = () => {
  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
};

export default Homepage;
