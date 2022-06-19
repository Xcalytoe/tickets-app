import React from "react";
import { TicketsContainer } from "./Tickets.styled";

const MyTickets = () => {
  return (
    <TicketsContainer>
      <header>
        <div className="header">
          <p>My Tickets</p>
          <div></div>
        </div>
      </header>
    </TicketsContainer>
  );
};

export default MyTickets;
