import React from "react";
import GetHelp from "../components/GetHelp";
import { NavContainer } from "../components/Navbar/Navbar.styled";
import Pagination from "../components/Pagination";
import Tickets from "../components/Tickets";

const Support: React.FC = () => {
  return (
    <div style={{ minHeight: 1600 }}>
      <NavContainer />
      <GetHelp />
      <Tickets />
      <Pagination />
    </div>
  );
};

export default Support;
