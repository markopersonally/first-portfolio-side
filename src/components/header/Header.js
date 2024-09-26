import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Navigation from "./Navigation";

import "./Header.css";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="header" id="header">
      <Navigation />
      <>
        {visible && <AboutMe />}
        <button className="btn" onClick={() => setVisible(!visible)}>
          {visible ? "Cancel" : "AboutMe"}
        </button>
      </>
    </header>
  );
};

export default Header;
