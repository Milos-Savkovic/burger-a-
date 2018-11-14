import React from "react";

// import Aux from "../../hoc/Aux";
import "./Layout.css";

const layout = props => (
  <div>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">{props.children}</main>
  </div>
);

export default layout;
