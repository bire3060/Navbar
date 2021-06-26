import React from "react";
import SubNav from "./SubNav";

const SubNavContainer = () => {
  return (
    <div className="subNavContainer">
      <SubNav value="Home" />
      <SubNav value="About" />
      <SubNav value="Contact" />
      <SubNav value="Portfolio" />
    </div>
  );
};

export default SubNavContainer;
