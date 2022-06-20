import React from "react";
import {
  useSearchText,
  useSelectFilter,
} from "../../helper/data-store/tickets";
import Search from "../InputFields/Search";
import Select from "../InputFields/Select";
import Table from "./Table";
import { TicketsContainer } from "./Tickets.styled";

const MyTickets = () => {
  const setSearchText = useSearchText(({ setSearchText }) => setSearchText);
  const setSelectFilter = useSelectFilter(
    ({ setSelectFilter }) => setSelectFilter
  );
  const handleSearch = (e: React.SyntheticEvent, value: string) => {
    e.preventDefault();
    setSearchText(value); // set item to global state
  };
  const selectOption = [
    { id: 1, name: "All Tickets", value: "all", count: 31 },
    { id: 2, name: "Open", value: "open", count: 11 },
    { id: 3, name: "Resolved", value: "resolved", count: 12 },
    { id: 4, name: "Feedback", value: "feedback", count: 8 },
    { id: 5, name: "Empty ", value: "empty", count: 0 },
  ];

  const onChange = (value: string) => {
    setSelectFilter(value); // set item to global state
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
            <div className="form">
              <Search placeholder="Search Tickets" onChange={handleSearch} />
            </div>
          </div>
        </div>
      </header>
      <Table />
    </TicketsContainer>
  );
};

export default MyTickets;
