import React from "react";

import Guest from "./Guest";

import "./Guests.css";
const Guests = (props) => {
  const { allGuest } = props;
  return (
    <section className='all-guest'>
      {allGuest.map((guest) => (
        <Guest guestInfo={guest}></Guest>
      ))}
    </section>
  );
};

export default Guests;
