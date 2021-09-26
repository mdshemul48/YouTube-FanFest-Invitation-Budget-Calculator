import React from "react";

import Guest from "./Guest";

import "./Guests.css";
const Guests = () => {
  return (
    <section className='all-guest'>
      <Guest></Guest>
      <Guest></Guest>
      <Guest></Guest>
    </section>
  );
};

export default Guests;
