import React from "react";
import Search from "../InputFields/Search";
import Select from "../InputFields/Select";
import { TicketsContainer } from "./Tickets.styled";

const MyTickets = () => {
  const handleSearch = (e: React.SyntheticEvent, value: string) => {
    e.preventDefault();
    console.log();
  };
  const selectOption = [
    { id: 1, name: "All", value: "all", count: 20 },
    { id: 2, name: "Open", value: "open", count: 5 },
    { id: 3, name: "Resolved", value: "resolved", count: 5 },
    { id: 4, name: "Feedback", value: "feedback", count: 5 },
  ];

  const onChange = (value: string) => {
    console.log(value);
  };

  return (
    <TicketsContainer>
      <header>
        <div className="header">
          <p>My Tickets</p>
          <div className="ticket">
            <div className="ticket-select">
              <Select
                selectOption={selectOption}
                onChange={onChange}
                defaultOption={selectOption[0]}
              />
            </div>
            <form className="form">
              <Search placeholder="Search Tickets" onSubmit={handleSearch} />
            </form>
          </div>
        </div>
      </header>
    </TicketsContainer>
  );
};

export default MyTickets;
