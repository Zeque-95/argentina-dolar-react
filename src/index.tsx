import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { UI } from "./views/UI";

ReactDOM.render(<UI />, document.getElementById("root"));

serviceWorker.unregister();
