import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import SubText from "./SubText";

import "./Guest.css";
const Guest = () => {
  return (
    <div className='guest'>
      <img src='https://i.insider.com/5ca6083886291369fa2eacc2?width=700&format=jpeg&auto=webp' />
      <h4 className='channel-name'>VanossGaming</h4>

      <SubText title={"AKA"} value={"Evan Fong"}></SubText>
      <SubText title={"Subscribers"} value={"25.4 million"}></SubText>
      <SubText title={"Location"} value={"Canada"}></SubText>
      <SubText title={"Invitation Cost"} value={"100000$"}></SubText>

      <button className='invite-button'>
        <FontAwesomeIcon icon={faUserPlus} /> Invite
      </button>
    </div>
  );
};

export default Guest;
