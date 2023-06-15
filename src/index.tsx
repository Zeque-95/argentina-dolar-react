import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { RoutesWrap } from "./routes/RoutesWrap";

ReactDOM.render( <RoutesWrap /> , document.getElementById("root"));

serviceWorker.unregister();
