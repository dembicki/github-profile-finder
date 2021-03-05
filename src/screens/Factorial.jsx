import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Factorial() {
  return (
    <div>
      <Header title="Factorial calculator" />
      <Search factorial />
      <ContentWrapper>
        <h2>Output: 5! = 120</h2>
      </ContentWrapper>
    </div>
  );
}
