import React from "react";
import HeaderBody from "./header-body";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-glav">
      <div className="header">
        <Link to={"/"}>
          <button className="header-logo"></button>
        </Link>

        <HeaderBody></HeaderBody>
      </div>
    </div>
  );
}

export default Header;
