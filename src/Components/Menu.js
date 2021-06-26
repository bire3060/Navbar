import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

export const Menu = ({ handle }) => {
  return (
    <div className="menu">
      <MenuIcon style={{ fontSize: "40px" }} onClick={handle} />
    </div>
  );
};
