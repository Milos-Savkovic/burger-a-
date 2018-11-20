import React from "react";

// import Aux from "../../hoc/Aux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <div>
    <Toolbar />
    <main className="content">{props.children}</main>
  </div>
);

export default layout;
