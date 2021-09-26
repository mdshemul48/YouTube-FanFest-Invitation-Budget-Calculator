import React from "react";

import Guest from "./Guest";

import "./Guests.css";
const Guests = (props) => {
  const { allGuest, addGuestHandler } = props;
  // this list will show all the guest to the display
  return (
    <section className='all-guest'>
      {allGuest.map((guest) => (
        <Guest
          key={guest.id}
          guestInfo={guest}
          addGuestHandler={addGuestHandler}
        />
      ))}
    </section>
  );
};

export default Guests;
