import React from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import HistoryList from "../components/HistoryList";
import Search from "../components/Search";

export default function Factorial() {
  return (
    <div>
      <Header title="Factorial calculator" />
      <Search isFactorial />
      <ContentWrapper>
        <HistoryList />
      </ContentWrapper>
    </div>
  );
}
