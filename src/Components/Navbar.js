import Main from "./Main";
import React from "react";
import SubNavContainer from "./SubNavContainer";

const Navbar = ({ nav, handle, menu }) => {
  return (
    <div className="navContainer">
      <Main />

      {nav && <SubNavContainer />}
    </div>
  );
};

export default Navbar;
