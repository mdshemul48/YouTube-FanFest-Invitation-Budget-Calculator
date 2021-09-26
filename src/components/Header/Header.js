import React from "react";

import "./Header.css";
const Header = () => {
  // header component with just text
  return (
    <header>
      <div>
        <h1 className='main-title'>YouTube FanFest 2021 Invitation</h1>
        <h3 className='secondary-title'>Total budget 10M USD</h3>
      </div>
    </header>
  );
};

export default Header;
