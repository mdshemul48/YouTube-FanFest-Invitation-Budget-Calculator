import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

import SubText from "./SubText";

import "./Guest.css";
const Guest = (props) => {
  // this state responsible for disabling invite button for invited guests
  const [Invited, setInvited] = useState(false);

  const { addGuestHandler, guestInfo } = props;
  const { channelName, name, location, subs, InvitationCost, image, id } =
    guestInfo;

  // this will call the add Guest handler from guestAndCost component
  const addGuestEventHandler = () => {
    addGuestHandler(id);
    setInvited(true);
  };

  return (
    <div className='guest'>
      <img src={image} alt={name} />
      {/* guest details */}
      <h4 className='channel-name'>{channelName}</h4>
      <SubText title={"AKA"} value={name} />
      <SubText title={"Subscribers"} value={`${subs} million`} />
      <SubText title={"Location"} value={location} />
      <SubText title={"Invitation Cost"} value={InvitationCost + "$"} />

      {/* button for adding guest to the list */}
      <button
        className={`add-button ${Invited ? "Invited" : ""}`}
        onClick={addGuestEventHandler}
        disabled={Invited}
      >
        <AiOutlineUserAdd /> {Invited ? "Invited" : "Invite"}
      </button>
    </div>
  );
};

export default Guest;
