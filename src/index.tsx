import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

const container = document.getElementById("app");

const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, container);
};

render(App);
