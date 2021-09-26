import React, { useEffect, useState } from "react";

import Guests from "./Guests";
import TotalCostCard from "../TotalCost/TotalCostCard";

import "./GuestAndCost.css";
const GuestAndCost = () => {
  const [allGuest, setAllGuest] = useState([]);
  const [invitedGuest, setInvitedGuest] = useState([]);

  useEffect(() => {
    fetch("./FakeData.JSON")
      .then((data) => data.json())
      .then((data) => setAllGuest(data));
  }, []);

  // this function will add invited guest to the invitedGuest state arr
  const addGuestHandler = (id) => {
    const selectedGuest = allGuest.find((guest) => guest.id === id);
    setInvitedGuest([...invitedGuest, selectedGuest]);
  };

  return (
    <main className='main-container'>
      <Guests allGuest={allGuest} addGuestHandler={addGuestHandler} />
      <TotalCostCard invitedGuest={invitedGuest} />
    </main>
  );
};

export default GuestAndCost;
