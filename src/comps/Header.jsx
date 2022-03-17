import React from "react";
import { FiMenu } from "react-icons/fi";
function Header() {
  return (
    <header>
      <h3>NEW YORK TIMES BEST SELLERS</h3>
      <div className="hambi">
        <FiMenu />
      </div>
    </header>
  );
}

export default Header;
