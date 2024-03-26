import React from "react";
import HeaderBody from "./header-body";

function Header() {
  return (
    <div className="header-glav">
      <div className="header">
        <button className="header-logo"></button>
        <HeaderBody></HeaderBody>
      </div>
    </div>
  );
}

export default Header;
