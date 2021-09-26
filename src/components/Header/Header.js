import React from "react";

import "./Header.css";
// header component with just text
const Header = () => {
  return (
    <header>
      <div>
        <h1 className='main-title'>YouTube FanFest 2021 Invitation</h1>
        <h3 className='secondary-title'>Total budget 1M USD</h3>
      </div>
    </header>
  );
};

export default Header;
