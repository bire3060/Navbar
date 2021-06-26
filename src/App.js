import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import { Menu } from "./Components/Menu";

const App = () => {
  const [nav, setNav] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });
  function handleSize() {
    window.innerWidth < 700 ? setNav(false) : setNav(true);
  }
  function handleClick() {
    setTimeout(() => {
      setNav(!nav);
    }, 300);
  }
  return (
    <div>
      <Navbar nav={nav} />
      <Menu handle={handleClick} />
    </div>
  );
};

export default App;
