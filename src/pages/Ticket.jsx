import React from "react";
import Layout from "../components/Layout";
import SearchTicket from "../components/SearchTicket/SearchTicket";

export default function Ticket() {
  return (
    <>
      <Layout children={<SearchTicket />} />
    </>
  );
}
