import React from "react";
import GetHelp from "../components/GetHelp";
import { NavContainer } from "../components/Navbar/Navbar.styled";
import Tickets from "../components/Tickets";

const Support: React.FC = () => {
  return (
    <>
      <NavContainer />
      <GetHelp />
      <Tickets />
    </>
  );
};

export default Support;
