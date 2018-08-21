import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";
import 'semantic-ui-css/semantic.min.css';
WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif"]
  }
});
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
