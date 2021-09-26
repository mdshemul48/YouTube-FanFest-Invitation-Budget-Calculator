import React from "react";

import { AiOutlineUserAdd, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import SubText from "./SubText";

import "./Guest.css";
const Guest = (props) => {
  const { channelName, name, location, subs, InvitationCost, image } =
    props.guestInfo;

  return (
    <div className='guest'>
      <img src={image} />
      <h4 className='channel-name'>{channelName}</h4>

      <SubText title={"AKA"} value={name}></SubText>
      <SubText title={"Subscribers"} value={`${subs} million`}></SubText>
      <SubText title={"Location"} value={location}></SubText>
      <SubText title={"Invitation Cost"} value={InvitationCost}></SubText>

      <button className='invite-button'>
        <AiOutlineUserAdd /> Invite
      </button>

      <div className='user-social-media'>
        <AiFillYoutube className='icon youtube' />
        <FaFacebook className='icon facebook' />
      </div>
    </div>
  );
};

export default Guest;
