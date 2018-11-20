import React from "react";

const button = props => {
  return (
    <button className="Button" onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
