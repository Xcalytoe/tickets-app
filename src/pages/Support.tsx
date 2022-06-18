import React from "react";
import MyTickets from "../components/MyTickets";
import { Helmet } from "react-helmet";

const Support: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#286ef1" />
        <title>Support-Tickets</title>
      </Helmet>
      <MyTickets />
    </>
  );
};

export default Support;
