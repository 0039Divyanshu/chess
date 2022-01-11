import React, { useState } from "react";
import logo from "./images/logo.png";
import profile from "./images/profile.png";
import * as style from "./style/style.js";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <nav style={style.nav}>
        {/* <h1>Knights Royale</h1> */}
        <img src={logo} style={style.navImg}/>
        <div style={style.profile}>
          <img src={profile} style={style.navImg}></img>
        </div>
        <button
          href="#"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{
            ...style.navButton.normal,
            ...(hover ? style.navButton.hover : null),
          }}
        >
          PLAY
        </button>
      </nav>
    </>
  );
};

export default Navbar;
