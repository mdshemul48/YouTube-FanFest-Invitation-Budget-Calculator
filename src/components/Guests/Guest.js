import React, { useState } from "react";

import { AiOutlineUserAdd } from "react-icons/ai";

import SubText from "./SubText";

import "./Guest.css";
const Guest = (props) => {
  const [added, setadded] = useState(false);

  const { addGuestHandler, guestInfo } = props;

  const { channelName, name, location, subs, InvitationCost, image, id } =
    guestInfo;

  const addGuestEventHandler = () => {
    addGuestHandler(id);
    setadded(true);
  };

  return (
    <div className='guest'>
      <img src={image} />
      <h4 className='channel-name'>{channelName}</h4>

      <SubText title={"AKA"} value={name} />
      <SubText title={"Subscribers"} value={`${subs} million`} />
      <SubText title={"Location"} value={location} />
      <SubText title={"Invitation Cost"} value={InvitationCost} />

      <button
        className={`add-button ${added ? "added" : ""}`}
        onClick={addGuestEventHandler}
        disabled={added}
      >
        <AiOutlineUserAdd /> {added ? "added" : "add"}
      </button>
    </div>
  );
};

export default Guest;
