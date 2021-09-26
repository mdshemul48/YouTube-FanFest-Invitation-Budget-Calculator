import React from "react";

import "./TotalCostCard.css";
const TotalCostCard = (props) => {
  const { invitedGuest } = props;

  // calculation of total cost
  const total = invitedGuest.reduce(
    (prevValue, guest) => guest.InvitationCost + prevValue,
    0
  );

  return (
    <div className='cost-card'>
      <h2>YouTuber Invited: {invitedGuest.length}</h2>
      <h2>Total Cost: {total}</h2>
      <hr className='line' />

      {/* showing all guest who invited */}
      {invitedGuest.map((guest) => (
        <h3 key={guest.id}>
          {guest.name} ({guest.channelName})
        </h3>
      ))}
    </div>
  );
};

export default TotalCostCard;
